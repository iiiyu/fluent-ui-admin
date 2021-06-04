import React from 'react';

export interface ContentBasicLayoutProps {
  children: React.ReactNode;
  title: string;
  url: string;
  documentTitle: string;
}

function ContentBasicLayout(prop: ContentBasicLayoutProps) {
  return (
    <div className="h-full flex flex-col space-y-4">
      <h1 className="text-5xl">{prop.title}</h1>
      <a href={prop.url}>{prop.documentTitle}</a>
      <div className="container flex flex-col space-y-4">{prop.children}</div>
    </div>
  );
}

export default ContentBasicLayout;
