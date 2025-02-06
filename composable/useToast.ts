import { useToast } from "~/components/ui/toast";



type ToastOptions = {
  title: string;
  description: string;
  styleKey?: keyof typeof customStyles;  
  type?: "background" | "foreground";   
  variant?: "destructive" | "default" | null;  
};

const customStyles = {
  error: {
    type: 'background',
    variant: 'destructive',
    class: 'bg-red-500 text-white',
  },
  success: {
    type: 'background',
    variant: 'default',
    class: 'bg-green-500 text-white',
  },
  warning: {
    type: 'background',
    variant: 'default',
    class: 'bg-yellow-500 text-black',
  },
  info: {
    type: 'background',
    variant: 'default',
    class: 'bg-blue-500 text-white',
  },
};

export function useToastStyles() {
  const { toast } = useToast();

  /**
   * Shows a toast notification with customizable or predefined styles
   * @param {ToastOptions} options - The configuration for the toast
   */
  const showToast = ({ title, description, styleKey, type = 'background', variant = 'default' }: ToastOptions) => {
    const style = styleKey && customStyles[styleKey] ? customStyles[styleKey] : { type, variant, class: '' };
    const validType = type === 'background' || type === 'foreground' ? type : 'background';
    const validVariant = variant === 'default' || variant === 'destructive' || variant === null ? variant : 'default';

    toast({
      title,
      description,
      type: validType,
      variant: validVariant,
      class: style.class,
    });
  };

  return {
    showToast,
  };
}
