
import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-10`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
