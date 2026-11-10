import { getAssetUrl } from "../../lib/assets";

/** Maps product route hrefs to their matching icon assets in /public/icons/products/. */
const PRODUCT_ICON_IMAGES: Record<string, string> = {
  "/products/qms":
    "/icons/products/Quality_Management_System__-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/woms":
    "/icons/products/Work_Order_Management_System__-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/inplant-logistics":
    "/icons/products/Inplant_Logistics_Application__-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/tyre-health":
    "/icons/products/Tyre_Managemnt_System__-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/cwms":
    "/icons/products/Contractor_Workforce_Management_System_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/workforce-management":
    "/icons/products/Performace_Based_Incentive_Management_Software_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/suraksha":
    "/icons/products/Suraksha_-_Safety_Application_-_Acceleron_Solutions_DARK-removebg-preview.png",
  "/products/yogdaan":
    "/icons/products/Yogdaan_-_Employee_Feedback_and_survey_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/appraisal-management":
    "/icons/products/Employee_Appraisal_Managemnt_System_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/ifms":
    "/icons/products/IFSM_-Intelligent_Feild_Service_Management_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/vanijya":
    "/icons/products/Vanijya_Heavy_Machinery_Marketplace-_Ecommerce_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/samriddhi":
    "/icons/products/Samriddhi_-_Customer_Loyalty_Mangement_Software_LIGHT-removebg-preview.png",
  "/products/warranty-management":
    "/icons/products/Customer_Warranty_Management__-_LIGHT-removebg-preview.png",
  "/products/salesorbit":
    "/icons/products/SalesOrbit_-_AI_Powered_Sales_Journey_Plan_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/approval-management":
    "/icons/products/Approval_Management_Syetem_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/treasury-management":
    "/icons/products/Treasury_Management_Portal_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/acceledge-ai":
    "/icons/products/AccelEdge_AI_-_AI_Governance_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/edms":
    "/icons/products/E-Document_Managemnt_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
  "/products/supplier-portal":
    "/icons/products/Supplier_Managemnt_Portal_-_Acceleron_Solutions_LIGHT-removebg-preview.png",
};

interface ProductCardIconProps {
  href: string;
  name: string;
  FallbackIcon: any;
  gradient: string;
  iconImage?: string;
}

/** Renders a product's PNG lockup when available, otherwise falls back to its Lucide badge icon. */
export function ProductCardIcon({
  href,
  name,
  FallbackIcon,
  gradient,
  iconImage,
}: ProductCardIconProps) {
  const imageSrc = iconImage ?? PRODUCT_ICON_IMAGES[href];

  if (imageSrc) {
    return (
      <div className="h-14 w-auto max-w-[140px] rounded-2xl bg-white border border-border/60 px-3 py-1.5 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
        <img
          src={getAssetUrl(imageSrc)}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-auto max-w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0`}
    >
      <FallbackIcon className="h-6 w-6" />
    </div>
  );
}
