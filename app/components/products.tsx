import Image from "next/image";
import React from "react";

interface ManillaPaySectionProps {
  smallHeader: string;
  mainHeader: string;
  description: string;
  features: string[];
  subdes?: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  imageSrc: string;
  imageAlt?: string;
  imageWidth?: number; // New: Custom width for Next.js Image (in pixels)
  imageHeight?: number; // New: Custom height for Next.js Image (in pixels)
  borderColor?: string;
  buttonBgColor?: string;
  bgBody?: string;
  // New text color props: Pass Tailwind color scale (e.g., 'gray-700') or hex (e.g., '#181635'). Defaults match current styles.
  smallHeaderColor?: string;
  mainHeaderColor?: string;
  descriptionColor?: string;
  subdesColor?: string;
  featuresColor?: string;
  buttonTextColor?: string; // Supports Tailwind names or hex for flexibility
}

const borderClassMap: Record<string, string> = {
  blue: "border-t-blue-500",
  yellow: "border-t-[#FBB321]",
  yello: "border-t-[#FBB321]", // Alias for common typo
};

const buttonBgClassMap: Record<string, string> = {
  blue: "bg-gradient-to-r from-[#0005CA] to-[#040786] hover:from-[#040786] hover:to-[#0005CA]",
  darkgr:
    "bg-gradient-to-r from-[#333333] to-[#000000] hover:from-[#000000] hover:to-[#333333]",
  plain: "bg-white border-2 border-gray-300 hover:bg-gray-50", // Added border/hover for better plain button visibility
  // Add more as needed
};

const bgBodyClassMap: Record<string, string> = {
  default: "bg-white",
  blueBg: "bg-[#281AC9] text-white",
  patterned: "",
};

// Map for button text colors to ensure purge-safety (extend as needed)
const buttonTextClassMap: Record<string, string> = {
  white: "text-white",
  dark: "text-[#181635]",
  // Add more common colors, e.g., 'gray-900': 'text-gray-900'
};

export default function ManillaPaySection({
  smallHeader,
  mainHeader,
  description,
  features,
  subdes,
  buttonLabel,
  onButtonClick,
  imageSrc,
  imageAlt = "",
  imageWidth = 400, // Default fallback width
  imageHeight = 300, // Default fallback height
  borderColor = "",
  buttonBgColor = "",
  bgBody = "",
  // Text color defaults
  smallHeaderColor = "gray-700",
  mainHeaderColor = "gray-900",
  descriptionColor = "gray-600",
  subdesColor = "gray-800",
  featuresColor = "gray-600",
  buttonTextColor = "white",
}: ManillaPaySectionProps) {
  const borderClass = borderClassMap[borderColor] || "border-t-green-500";
  const buttonBgClass =
    buttonBgClassMap[buttonBgColor] || "bg-blue-900 hover:bg-blue-800";
  const bgBodyClass = bgBodyClassMap[bgBody] || "bg-white";

  // Helper for button text: Supports Tailwind names or hex (arbitrary values)
  const getButtonTextClass = (color: string) => {
    if (buttonTextClassMap[color]) return buttonTextClassMap[color];
    if (color.startsWith("#")) {
      return `text-[${color}]`; // Arbitrary hex color
    }
    return `text-${color}`; // Tailwind scale fallback
  };

  const buttonTextClass = getButtonTextClass(buttonTextColor);

  // Helper to generate text classes for other elements (assumes Tailwind scales; extend for hex if needed)
  const getTextClass = (color: string, baseClasses: string) =>
    `${baseClasses} text-${color}`;

  return (
    <section
      className={`w-full border-t-12 ${borderClass} rounded-4xl ${bgBodyClass} px-4 sm:px-10 mx-auto max-w-6xl flex flex-col xl:flex-row items-center md:items-start gap-6 md:gap-12 overflow-hidden relative`}>
      {/* Text Content */}
      <div className="flex flex-col max-w-xl text-left py-4 md:py-8 flex-1">
        <div className="text-center lg:text-left">
          <span
            className={getTextClass(
              smallHeaderColor,
              "text-sm md:text-base mb-3 font-bold"
            )}>
            {smallHeader}
          </span>
          <h1
            className={getTextClass(
              mainHeaderColor,
              "text-2xl md:text-3xl xl:text-4xl font-semibold leading-tight mb-5"
            )}>
            {mainHeader}
          </h1>
          <p
            className={getTextClass(
              descriptionColor,
              "mb-6 text-sm md:text-base"
            )}>
            {description}
          </p>
        </div>
        {subdes && (
          <p
            className={getTextClass(
              subdesColor,
              "text-base font-medium md:text-lg mb-4"
            )}>
            {subdes}
          </p>
        )}
        <ul
          className={getTextClass(
            featuresColor,
            "list-disc list-inside space-y-2 mb-4 max-h-32 overflow-y-auto"
          )}>
          {features.map((feat, idx) => (
            <li key={idx} className="text-sm md:text-base">
              {feat}
            </li>
          ))}
        </ul>
        <button
          className={`${buttonBgClass} ${buttonTextClass} rounded-full px-6 md:px-16 py-3 mb-4 md:py-4 text-base md:text-lg font-semibold lg:max-w-max shadow-lg transition cursor-pointer hover:scale-105 w-full xl:w-auto`}
          onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
      {/* Image - Standardized container size for all products */}
      <div className="relative shrink-0 w-full xl:w-[500px] flex items-center justify-center py-4 xl:py-0">
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] xl:h-[500px] max-w-full flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={500}
            className="w-auto h-full max-w-full object-contain rounded-3xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 500px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
