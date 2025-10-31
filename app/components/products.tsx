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
  blue: 'border-t-blue-500',
  yellow: 'border-t-[#FBB321]',
  yello: 'border-t-[#FBB321]', // Alias for common typo
};

const buttonBgClassMap: Record<string, string> = {
  blue: 'bg-gradient-to-r from-[#0005CA] to-[#040786] hover:from-[#040786] hover:to-[#0005CA]',
  darkgr: 'bg-gradient-to-r from-[#333333] to-[#000000] hover:from-[#000000] hover:to-[#333333]',
  plain: 'bg-white border-2 border-gray-300 hover:bg-gray-50', // Added border/hover for better plain button visibility
  // Add more as needed
};

const bgBodyClassMap: Record<string, string> = {
  default: 'bg-white',
  blueBg: 'bg-[#281AC9] text-white',
  patterned: '',
};

// Map for button text colors to ensure purge-safety (extend as needed)
const buttonTextClassMap: Record<string, string> = {
  white: 'text-white',
  dark: 'text-[#181635]',
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
  imageAlt = '',
  borderColor = '',
  buttonBgColor = '',
  bgBody = '',
  // Text color defaults
  smallHeaderColor = 'gray-700',
  mainHeaderColor = 'gray-900',
  descriptionColor = 'gray-600',
  subdesColor = 'gray-800',
  featuresColor = 'gray-600',
  buttonTextColor = 'white',
}: ManillaPaySectionProps) {
  const borderClass = borderClassMap[borderColor] || 'border-t-green-500';
  const buttonBgClass = buttonBgClassMap[buttonBgColor] || 'bg-blue-900 hover:bg-blue-800';
  const bgBodyClass = bgBodyClassMap[bgBody] || 'bg-white';

  // Helper for button text: Supports Tailwind names or hex (arbitrary values)
  const getButtonTextClass = (color: string) => {
    if (buttonTextClassMap[color]) return buttonTextClassMap[color];
    if (color.startsWith('#')) {
      return `text-[${color}]`; // Arbitrary hex color
    }
    return `text-${color}`; // Tailwind scale fallback
  };

  const buttonTextClass = getButtonTextClass(buttonTextColor);

  // Helper to generate text classes for other elements (assumes Tailwind scales; extend for hex if needed)
  const getTextClass = (color: string, baseClasses: string) => `${baseClasses} text-${color}`;

  return (
    <section
      className={`border-t-12 ${borderClass} rounded-4xl ${bgBodyClass} px-10 mx-aut flex flex-col xl:flex-row items-center md:items-start gap-12 md:gap-24 overflow-hidden relative`}
    >
      {/* Text Content */}
      <div className="flex flex-col max-w-xl text-left py-8">
        <div className="text-center lg:text-left">
          <span className={getTextClass(smallHeaderColor, 'text-sm md:text-base mb-3 font-bold')}>
            {smallHeader}
          </span>
          <h1
            className={getTextClass(
              mainHeaderColor,
              'text-3xl md:text-4xl font-semibold leading-tight mb-5',
            )}
          >
            {mainHeader}
          </h1>
          <p className={getTextClass(descriptionColor, 'mb-6')}>{description}</p>
        </div>
        {subdes && (
          <p className={getTextClass(subdesColor, ' text-base font-medium md:text-lg')}>
            {subdes}
          </p>
        )}
        <ul className={getTextClass(featuresColor, 'list-disc list-inside space-y-2 mb-4')}>
          {features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
        <button
          className={`${buttonBgClass} ${buttonTextClass} rounded-full px-16 py-3 mb-6 md:py-4 text-lg font-semibold lg:max-w-max shadow-lg transition cursor-pointer hover:scale-105 `}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
      {/* Image */}
      <div className="relative shrink-0  max-w-lg">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[30rem] object-contain rounded-3xl "
        />
      </div>
    </section>
  );
}
