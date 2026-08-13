import { createFileRoute, redirect, useNavigate, Link } from '@tanstack/react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getArticlesFn, createArticleFn, updateArticleFn, 
  getServicesFn, createServiceFn, updateServiceFn, 
  getProductsFn, createProductFn, updateProductFn, 
  getGalleryFn, createGalleryFn, updateGalleryFn 
} from '../actions/cms';
import { getAllBrochuresFn, createBrochureFn, updateBrochureFn } from '../actions/brochures';
import { uploadFileFn } from '../actions/upload';
import { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, UploadCloud } from 'lucide-react';

export const Route = createFileRoute('/admin/manage-content')({
  beforeLoad: ({ context }) => {
    // @ts-ignore
    const role = context.session?.user?.role;
    if (role !== 'SUPER_ADMIN' && role !== 'EDITOR') {
      throw redirect({ to: '/admin' });
    }
  },
  validateSearch: (search: Record<string, unknown>): {
    type: 'service' | 'product' | 'article' | 'gallery' | 'brochure';
    id?: string;
    articleType?: string;
  } => {
    return {
      type: (search.type as any) || 'service',
      id: search.id as string | undefined,
      articleType: search.articleType as string | undefined,
    };
  },
  component: AdminContentManage,
});

function FileUploadInput({ name, defaultValue = '', label, accept = "image/*" }: { name: string, defaultValue?: string, label: string, accept?: string }) {
  const [url, setUrl] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);
  
  useEffect(() => {
    if (defaultValue) setUrl(defaultValue);
  }, [defaultValue]);

  const handleUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const res = await uploadFileFn({ data: { filename: file.name, base64Data: reader.result as string, mimeType: file.type } });
        if (res.success) setUrl(res.url!);
        else alert("Upload failed: " + res.error);
      } catch(err) {
        alert("Upload error");
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };
  
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2 items-center">
        <Input type="hidden" name={name} value={url} />
        <Input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="Enter URL or upload file" className="flex-1" />
        <div className="relative">
          <Input type="file" accept={accept} onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full z-10" disabled={uploading} />
          <Button type="button" variant="secondary" disabled={uploading}>
            {uploading ? '...' : <><UploadCloud className="w-4 h-4 mr-2" /> Upload</>}
          </Button>
        </div>
      </div>
    </div>
  );
}

function RichTextEditor({ name, defaultValue = "" }: { name: string, defaultValue?: string }) {
  const [value, setValue] = useState(defaultValue);
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);

  useEffect(() => {
    if (defaultValue && !quillRef.current) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initQuill = () => {
      if (editorRef.current && !quillRef.current) {
        quillRef.current = new (window as any).Quill(editorRef.current, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ]
          }
        });
        quillRef.current.root.innerHTML = value || "";
        quillRef.current.on('text-change', () => {
          setValue(quillRef.current.root.innerHTML);
        });
      }
    };

    if (!document.getElementById('quill-css')) {
      const link = document.createElement('link');
      link.id = 'quill-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
      document.head.appendChild(link);
    }

    if (!(window as any).Quill) {
      const script = document.createElement('script');
      script.src = 'https://cdn.quilljs.com/1.3.6/quill.min.js';
      script.onload = initQuill;
      document.body.appendChild(script);
    } else {
      initQuill();
    }
  }, []);

  return (
    <div className="bg-white text-black mb-12">
      <Input type="hidden" name={name} value={value} />
      <div ref={editorRef} style={{ height: '400px' }} />
    </div>
  );
}

function AdminContentManage() {
  const { type, id, articleType } = Route.useSearch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // State for auto-generating slug
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugEdited, setSlugEdited] = useState(false);

  const generateSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!slugEdited) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
    setSlugEdited(true);
  };

  // Fetch lists so we can find our editing item (since we don't have getById endpoints yet)
  const { data: servicesData } = useQuery({ queryKey: ['cms-services'], queryFn: () => getServicesFn() });
  const { data: productsData } = useQuery({ queryKey: ['cms-products'], queryFn: () => getProductsFn() });
  const { data: blogsData } = useQuery({ queryKey: ['cms-articles', 'BLOG'], queryFn: () => getArticlesFn({ data: 'BLOG' }) });
  const { data: newsData } = useQuery({ queryKey: ['cms-articles', 'NEWS'], queryFn: () => getArticlesFn({ data: 'NEWS' }) });
  const { data: eventsData } = useQuery({ queryKey: ['cms-articles', 'EVENT'], queryFn: () => getArticlesFn({ data: 'EVENT' }) });
  const { data: csrData } = useQuery({ queryKey: ['cms-articles', 'CSR'], queryFn: () => getArticlesFn({ data: 'CSR' }) });
  const { data: galleryData } = useQuery({ queryKey: ['cms-gallery'], queryFn: () => getGalleryFn() });
  const { data: brochuresData } = useQuery({ queryKey: ['cms-brochures'], queryFn: () => getAllBrochuresFn() });

  let editingItem: any = null;
  if (id) {
    if (type === 'service') editingItem = servicesData?.services?.find((s: any) => s.id === id);
    if (type === 'product') editingItem = productsData?.products?.find((p: any) => p.id === id);
    if (type === 'article') {
      const allArticles = [
        ...(blogsData?.articles || []),
        ...(newsData?.articles || []),
        ...(eventsData?.articles || []),
        ...(csrData?.articles || [])
      ];
      editingItem = allArticles.find((a: any) => a.id === id);
    }
    if (type === 'gallery') editingItem = galleryData?.items?.find((g: any) => g.id === id);
    if (type === 'brochure') editingItem = brochuresData?.brochures?.find((b: any) => b.id === id);
  }

  // Initialize state when editingItem is loaded
  useEffect(() => {
    if (editingItem) {
      if (editingItem.title) setTitle(editingItem.title);
      if (editingItem.slug) {
        setSlug(editingItem.slug);
        setSlugEdited(true);
      }
    }
  }, [editingItem]);

  // Mutations
  const createService = useMutation({ mutationFn: createServiceFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-services']}); navigate({ to: '/admin/content' }); } });
  const updateService = useMutation({ mutationFn: updateServiceFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-services']}); navigate({ to: '/admin/content' }); } });
  const createProduct = useMutation({ mutationFn: createProductFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-products']}); navigate({ to: '/admin/content' }); } });
  const updateProduct = useMutation({ mutationFn: updateProductFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-products']}); navigate({ to: '/admin/content' }); } });
  const createArticle = useMutation({ mutationFn: createArticleFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-articles']}); navigate({ to: '/admin/content' }); } });
  const updateArticle = useMutation({ mutationFn: updateArticleFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-articles']}); navigate({ to: '/admin/content' }); } });
  const createGallery = useMutation({ mutationFn: createGalleryFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-gallery']}); navigate({ to: '/admin/content' }); } });
  const updateGallery = useMutation({ mutationFn: updateGalleryFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-gallery']}); navigate({ to: '/admin/content' }); } });
  const createBrochure = useMutation({ mutationFn: createBrochureFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-brochures']}); navigate({ to: '/admin/content' }); } });
  const updateBrochure = useMutation({ mutationFn: updateBrochureFn, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['cms-brochures']}); navigate({ to: '/admin/content' }); } });

  const onServiceSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      title: fd.get('title') as string,
      slug: fd.get('slug') as string,
      category: fd.get('category') as string,
      overview: fd.get('overview') as string,
      description: fd.get('description') as string,
      image_url: fd.get('image_url') as string,
      is_active: fd.get('is_active') === 'on'
    };
    if (editingItem) updateService.mutate({ data: { id: editingItem.id, ...data } });
    else createService.mutate({ data });
  };

  const onProductSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      name: fd.get('name') as string,
      category: fd.get('category') as string,
      description: fd.get('description') as string,
      image_url: fd.get('image_url') as string,
      is_active: fd.get('is_active') === 'on'
    };
    if (editingItem) updateProduct.mutate({ data: { id: editingItem.id, ...data } });
    else createProduct.mutate({ data });
  };

  const onArticleSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      title: fd.get('title') as string,
      slug: fd.get('slug') as string,
      type: (articleType || editingItem?.type || 'BLOG') as any,
      content: fd.get('content') as string,
      cover_image_url: fd.get('cover_image_url') as string,
      is_published: fd.get('is_published') === 'on'
    };
    if (editingItem) updateArticle.mutate({ data: { id: editingItem.id, ...data, type: editingItem.type } });
    else createArticle.mutate({ data });
  };

  const onGallerySubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      title: fd.get('title') as string,
      src: fd.get('src') as string,
      alt: fd.get('alt') as string,
      category: fd.get('category') as string,
      caption: fd.get('caption') as string
    };
    if (editingItem) updateGallery.mutate({ data: { id: editingItem.id, ...data } });
    else createGallery.mutate({ data });
  };

  const onBrochureSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      title: fd.get('title') as string,
      description: fd.get('description') as string,
      file_url: fd.get('file_url') as string,
      service_id: fd.get('service_id') as string || undefined,
      product_id: fd.get('product_id') as string || undefined,
    };
    if (editingItem) updateBrochure.mutate({ data: { id: editingItem.id, ...data } });
    else createBrochure.mutate({ data });
  };

  const isPending = createService.isPending || updateService.isPending || createProduct.isPending || updateProduct.isPending || createArticle.isPending || updateArticle.isPending || createGallery.isPending || updateGallery.isPending || createBrochure.isPending || updateBrochure.isPending;

  // We wait until data is loaded if an ID is present but item not found yet
  if (id && !editingItem) {
    return <div className="p-8 text-center text-muted-foreground">Loading item data...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/admin/content"><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {editingItem ? 'Edit' : 'Add'} {type.charAt(0).toUpperCase() + type.slice(1)}
          </h2>
          <p className="text-muted-foreground">
            Complete the form below to save changes.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border p-6 shadow-sm">
        
        {type === 'service' && (
          <form onSubmit={onServiceSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Title</Label><Input name="title" value={title} onChange={handleTitleChange} required /></div>
              <div className="space-y-2"><Label>Slug</Label><Input name="slug" value={slug} onChange={handleSlugChange} /></div>
              <div className="space-y-2"><Label>Category</Label><Input name="category" defaultValue={editingItem?.category} /></div>
              <FileUploadInput name="image_url" defaultValue={editingItem?.image_url} label="Image URL" />
            </div>
            <div className="space-y-2"><Label>Overview</Label><Textarea name="overview" defaultValue={editingItem?.overview} /></div>
            <div className="space-y-2"><Label>Description (Rich Text/HTML)</Label><RichTextEditor name="description" defaultValue={editingItem?.description} /></div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="is_active" id="s_active" defaultChecked={editingItem ? editingItem.is_active : true} />
              <Label htmlFor="s_active">Active</Label>
            </div>
            <div className="flex justify-end pt-4 border-t"><Button type="submit" disabled={isPending}>Save Service</Button></div>
          </form>
        )}

        {type === 'product' && (
          <form onSubmit={onProductSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Name</Label><Input name="name" defaultValue={editingItem?.name} required /></div>
              <div className="space-y-2"><Label>Category</Label><Input name="category" defaultValue={editingItem?.category} /></div>
              <div className="md:col-span-2">
                <FileUploadInput name="image_url" defaultValue={editingItem?.image_url} label="Image URL" />
              </div>
            </div>
            <div className="space-y-2"><Label>Description</Label><RichTextEditor name="description" defaultValue={editingItem?.description} /></div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="is_active" id="p_active" defaultChecked={editingItem ? editingItem.is_active : true} />
              <Label htmlFor="p_active">Active</Label>
            </div>
            <div className="flex justify-end pt-4 border-t"><Button type="submit" disabled={isPending}>Save Product</Button></div>
          </form>
        )}

        {type === 'article' && (
          <form onSubmit={onArticleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Title</Label><Input name="title" value={title} onChange={handleTitleChange} required /></div>
              <div className="space-y-2"><Label>Slug</Label><Input name="slug" value={slug} onChange={handleSlugChange} required /></div>
              <div className="md:col-span-2">
                <FileUploadInput name="cover_image_url" defaultValue={editingItem?.cover_image_url} label="Cover Image URL" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Content (SEO Optimized Rich Text)</Label>
              <RichTextEditor name="content" defaultValue={editingItem?.content} />
            </div>
            <div className="flex items-center gap-2 mt-8">
              <input type="checkbox" name="is_published" id="a_published" defaultChecked={editingItem ? editingItem.is_published : false} />
              <Label htmlFor="a_published">Publish immediately</Label>
            </div>
            <div className="flex justify-end pt-4 border-t"><Button type="submit" disabled={isPending}>Save Article</Button></div>
          </form>
        )}

        {type === 'gallery' && (
          <form onSubmit={onGallerySubmit} className="space-y-6">
            <FileUploadInput name="src" defaultValue={editingItem?.src} label="Image Source" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Title</Label><Input name="title" defaultValue={editingItem?.title} /></div>
              <div className="space-y-2"><Label>Category</Label><Input name="category" defaultValue={editingItem?.category} placeholder="e.g. Office, Culture" /></div>
              <div className="space-y-2"><Label>Alt Text</Label><Input name="alt" defaultValue={editingItem?.alt} /></div>
            </div>
            <div className="space-y-2"><Label>Caption</Label><Textarea name="caption" defaultValue={editingItem?.caption} /></div>
            <div className="flex justify-end pt-4 border-t"><Button type="submit" disabled={isPending}>Save Gallery Image</Button></div>
          </form>
        )}

        {type === 'brochure' && (
          <form onSubmit={onBrochureSubmit} className="space-y-6">
            <div className="space-y-2"><Label>Title</Label><Input name="title" defaultValue={editingItem?.title} required /></div>
            <FileUploadInput name="file_url" defaultValue={editingItem?.file_url} label="Brochure PDF File" accept="application/pdf,image/*" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Link to Service</Label>
                <select name="service_id" defaultValue={editingItem?.service_id || ""} className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                  <option value="">-- None --</option>
                  {servicesData?.services?.map((s: any) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label>Link to Product</Label>
                <select name="product_id" defaultValue={editingItem?.product_id || ""} className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                  <option value="">-- None --</option>
                  {productsData?.products?.map((p: any) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-2"><Label>Description</Label><Textarea name="description" defaultValue={editingItem?.description} /></div>
            <div className="flex justify-end pt-4 border-t"><Button type="submit" disabled={isPending}>Save Brochure</Button></div>
          </form>
        )}

      </div>
    </div>
  );
}
