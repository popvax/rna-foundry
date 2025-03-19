import "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";

declare module "react-day-picker" {
  interface CustomComponents {
    IconLeft?: React.ElementType;
    IconRight?: React.ElementType;
  }
}
