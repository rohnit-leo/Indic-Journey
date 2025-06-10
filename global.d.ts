// This adds JSX intrinsic elements declaration to fix TypeScript errors
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Commenting out Badge declaration as it's already exported from the component file
// declare module "@/components/ui/badge" {
//   export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
//     className?: string;
//     variant?: "default" | "secondary" | "destructive" | "outline";
//     key?: any;
//   }
  
//   export const Badge: React.FC<BadgeProps>;
// }

declare module "next/link" {
  export default function Link(props: any): JSX.Element;
}

declare module "next/image" {
  export default function Image(props: any): JSX.Element;
}

declare module "lucide-react" {
  export const MapPin: any;
  export const Calendar: any;
  export const Users: any;
  export const Star: any;
  export const ArrowRight: any;
  export const Filter: any;
  export const Search: any;
  export const Menu: any;
  export const X: any;
  export const Phone: any;
  export const Award: any;
  export const ChevronDown: any;
  export const Plane: any;
}
