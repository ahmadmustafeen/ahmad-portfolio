const SectionHeader = ({ number, title, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 relative ${className}`}>
      <div className="relative">
        <div className="top-bar"></div>
        <div className="bottom-piece"></div>
      </div>
      <h2 className="text-primary font-semibold text-base sm:text-lg">
        {number && `${number} - `}{title}
      </h2>
    </div>
  );
};

export default SectionHeader;