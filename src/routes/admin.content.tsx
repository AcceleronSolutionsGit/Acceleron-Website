import { createFileRoute, redirect, Link } from '@tanstack/react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getArticlesFn, deleteArticleFn,
  getServicesFn, deleteServiceFn,
  getProductsFn, deleteProductFn,
  getGalleryFn, deleteGalleryFn 
} from '../actions/cms';
import { getAllBrochuresFn, deleteBrochureFn, toggleBrochureStatusFn } from '../actions/brochures';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { format } from 'date-fns';
import { Image as ImageIcon, Plus, MoreHorizontal, Pencil, Trash, FileText, EyeOff, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { useState } from 'react';

export const Route = createFileRoute('/admin/content')({
  beforeLoad: ({ context }) => {
    // @ts-ignore
    const role = context.session?.user?.role;
    if (role !== 'SUPER_ADMIN' && role !== 'EDITOR') {
      throw redirect({ to: '/admin' });
    }
  },
  component: AdminContent,
});

function AdminContent() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('services');

  // Queries
  const { data: servicesData, isLoading: isLoadingServices } = useQuery({ queryKey: ['cms-services'], queryFn: () => getServicesFn() });
  const { data: productsData, isLoading: isLoadingProducts } = useQuery({ queryKey: ['cms-products'], queryFn: () => getProductsFn() });
  const { data: blogsData, isLoading: isLoadingBlogs } = useQuery({ queryKey: ['cms-articles', 'BLOG'], queryFn: () => getArticlesFn({ data: 'BLOG' }) });
  const { data: newsData, isLoading: isLoadingNews } = useQuery({ queryKey: ['cms-articles', 'NEWS'], queryFn: () => getArticlesFn({ data: 'NEWS' }) });
  const { data: eventsData, isLoading: isLoadingEvents } = useQuery({ queryKey: ['cms-articles', 'EVENT'], queryFn: () => getArticlesFn({ data: 'EVENT' }) });
  const { data: csrData, isLoading: isLoadingCSR } = useQuery({ queryKey: ['cms-articles', 'CSR'], queryFn: () => getArticlesFn({ data: 'CSR' }) });
  const { data: galleryData, isLoading: isLoadingGallery } = useQuery({ queryKey: ['cms-gallery'], queryFn: () => getGalleryFn() });
  const { data: brochuresData, isLoading: isLoadingBrochures } = useQuery({ queryKey: ['cms-brochures'], queryFn: () => getAllBrochuresFn() });

  // Mutations
  const deleteService = useMutation({ mutationFn: deleteServiceFn, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cms-services']}) });
  const deleteProduct = useMutation({ mutationFn: deleteProductFn, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cms-products']}) });
  const deleteArticle = useMutation({ mutationFn: deleteArticleFn, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cms-articles']}) });
  const deleteGallery = useMutation({ mutationFn: deleteGalleryFn, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cms-gallery']}) });
  const deleteBrochure = useMutation({ mutationFn: deleteBrochureFn, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cms-brochures']}) });
  const toggleBrochureStatus = useMutation({ mutationFn: toggleBrochureStatusFn, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cms-brochures']}) });

  const handleDelete = (id: string, type: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    if (type === 'service') deleteService.mutate({ data: { id } });
    if (type === 'product') deleteProduct.mutate({ data: { id } });
    if (type === 'article') deleteArticle.mutate({ data: { id } });
    if (type === 'gallery') deleteGallery.mutate({ data: { id } });
    if (type === 'brochure') deleteBrochure.mutate({ data: { id } });
  };

  const renderArticleTable = (data: any, isLoading: boolean, typeLabel: string) => (
    <div className="rounded-md border bg-white dark:bg-gray-800">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cover Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Published Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow><TableCell colSpan={5} className="text-center">Loading...</TableCell></TableRow>
          ) : data?.articles?.length === 0 ? (
            <TableRow><TableCell colSpan={5} className="text-center py-8">No {typeLabel.toLowerCase()} found.</TableCell></TableRow>
          ) : (
            data?.articles?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.cover_image_url ? <img src={item.cover_image_url} alt="" className="w-12 h-8 rounded object-cover" /> : <ImageIcon className="w-8 h-8 text-gray-400" />}
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.published_date ? format(new Date(item.published_date), 'MMM d, yyyy') : '-'}</TableCell>
                <TableCell>
                  <Badge variant={item.is_published ? 'default' : 'secondary'}>
                    {item.is_published ? 'Published' : 'Draft'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to="/admin/manage-content" search={{ type: 'article', id: item.id }} className="cursor-pointer flex w-full">
                          <Pencil className="mr-2 h-4 w-4" /> Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(item.id, 'article')} className="text-red-600 cursor-pointer"><Trash className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground">
            Manage your website's services, products, blogs, news, events, CSR, gallery, and brochures.
          </p>
        </div>
        
        {/* Dynamic Add Button based on active tab */}
        {activeTab === 'services' && (
          <Button asChild><Link to="/admin/manage-content" search={{ type: 'service' }}><Plus className="mr-2 h-4 w-4" /> Add Service</Link></Button>
        )}
        {activeTab === 'products' && (
          <Button asChild><Link to="/admin/manage-content" search={{ type: 'product' }}><Plus className="mr-2 h-4 w-4" /> Add Product</Link></Button>
        )}
        {['blogs', 'news', 'events', 'csr'].includes(activeTab) && (
          <Button asChild><Link to="/admin/manage-content" search={{ type: 'article', articleType: activeTab.toUpperCase().replace('S', '') }}><Plus className="mr-2 h-4 w-4" /> Add Article</Link></Button>
        )}
        {activeTab === 'gallery' && (
          <Button asChild><Link to="/admin/manage-content" search={{ type: 'gallery' }}><Plus className="mr-2 h-4 w-4" /> Add Gallery Image</Link></Button>
        )}
        {activeTab === 'brochures' && (
          <Button asChild><Link to="/admin/manage-content" search={{ type: 'brochure' }}><Plus className="mr-2 h-4 w-4" /> Add Brochure</Link></Button>
        )}

      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-wrap h-auto">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="brochures">Brochures</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="csr">CSR</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-4">
          <div className="rounded-md border bg-white dark:bg-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingServices ? (
                  <TableRow><TableCell colSpan={6} className="text-center">Loading...</TableCell></TableRow>
                ) : servicesData?.services?.length === 0 ? (
                  <TableRow><TableCell colSpan={6} className="text-center py-8">No services found.</TableCell></TableRow>
                ) : (
                  servicesData?.services?.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        {item.image_url || item.icon_url ? <img src={item.image_url || item.icon_url} alt="" className="w-8 h-8 rounded object-cover" /> : <ImageIcon className="w-8 h-8 text-gray-400" />}
                      </TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.category || '-'}</TableCell>
                      <TableCell>{item.slug || '-'}</TableCell>
                      <TableCell>
                        <Badge variant={item.is_active ? 'default' : 'secondary'}>{item.is_active ? 'Active' : 'Inactive'}</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to="/admin/manage-content" search={{ type: 'service', id: item.id }} className="cursor-pointer flex w-full">
                                <Pencil className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(item.id, 'service')} className="text-red-600 cursor-pointer"><Trash className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <div className="rounded-md border bg-white dark:bg-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingProducts ? (
                  <TableRow><TableCell colSpan={5} className="text-center">Loading...</TableCell></TableRow>
                ) : productsData?.products?.length === 0 ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8">No products found.</TableCell></TableRow>
                ) : (
                  productsData?.products?.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>
                         {item.image_url ? <img src={item.image_url} alt="" className="w-10 h-10 rounded object-cover" /> : <ImageIcon className="w-10 h-10 text-gray-400" />}
                      </TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category || '-'}</TableCell>
                      <TableCell>
                        <Badge variant={item.is_active ? 'default' : 'secondary'}>{item.is_active ? 'Active' : 'Inactive'}</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to="/admin/manage-content" search={{ type: 'product', id: item.id }} className="cursor-pointer flex w-full">
                                <Pencil className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(item.id, 'product')} className="text-red-600 cursor-pointer"><Trash className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="brochures" className="space-y-4">
          <div className="rounded-md border bg-white dark:bg-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Linked To</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingBrochures ? (
                  <TableRow><TableCell colSpan={5} className="text-center">Loading...</TableCell></TableRow>
                ) : brochuresData?.brochures?.length === 0 ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8">No brochures found.</TableCell></TableRow>
                ) : (
                  brochuresData?.brochures?.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>
                        {item.service_title ? <Badge variant="outline">Service: {item.service_title}</Badge> : null}
                        {item.product_name ? <Badge variant="outline">Product: {item.product_name}</Badge> : null}
                        {!item.service_title && !item.product_name ? <span className="text-muted-foreground">-</span> : null}
                      </TableCell>
                      <TableCell>
                        <a href={item.file_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                          <FileText className="w-4 h-4" /> View
                        </a>
                      </TableCell>
                      <TableCell>
                        <Badge variant={item.is_active ? 'default' : 'secondary'}>{item.is_active ? 'Active' : 'Inactive'}</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to="/admin/manage-content" search={{ type: 'brochure', id: item.id }} className="cursor-pointer flex w-full">
                                <Pencil className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toggleBrochureStatus.mutate({ data: { id: item.id, isActive: !item.is_active } })} className="cursor-pointer">
                              {item.is_active ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                              {item.is_active ? 'Deactivate' : 'Activate'}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(item.id, 'brochure')} className="text-red-600 cursor-pointer"><Trash className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="blogs" className="space-y-4">{renderArticleTable(blogsData, isLoadingBlogs, 'Blogs')}</TabsContent>
        <TabsContent value="news" className="space-y-4">{renderArticleTable(newsData, isLoadingNews, 'News')}</TabsContent>
        <TabsContent value="events" className="space-y-4">{renderArticleTable(eventsData, isLoadingEvents, 'Events')}</TabsContent>
        <TabsContent value="csr" className="space-y-4">{renderArticleTable(csrData, isLoadingCSR, 'CSR Initiatives')}</TabsContent>

        <TabsContent value="gallery" className="space-y-4">
          <div className="rounded-md border bg-white dark:bg-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Caption</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingGallery ? (
                  <TableRow><TableCell colSpan={5} className="text-center">Loading...</TableCell></TableRow>
                ) : galleryData?.items?.length === 0 ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8">No gallery items found.</TableCell></TableRow>
                ) : (
                  galleryData?.items?.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>
                         {item.src ? <img src={item.src} alt={item.alt} className="w-16 h-10 rounded object-cover" /> : <ImageIcon className="w-10 h-10 text-gray-400" />}
                      </TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.category || '-'}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{item.caption || '-'}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to="/admin/manage-content" search={{ type: 'gallery', id: item.id }} className="cursor-pointer flex w-full">
                                <Pencil className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(item.id, 'gallery')} className="text-red-600 cursor-pointer"><Trash className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

      </Tabs>

    </div>
  );
}
