import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'lg' | 'sm';
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'transition-all duration-300',
          variant === 'primary' && 'bg-custom-blue hover:bg-custom-navy text-white',
          variant === 'secondary' && 'bg-custom-lightBlue hover:bg-custom-blue text-custom-navy hover:text-white',
          variant === 'outline' && 'border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white',
          size === 'lg' && 'px-8 py-6 text-lg',
          className
        )}
        {...props}
      />
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };