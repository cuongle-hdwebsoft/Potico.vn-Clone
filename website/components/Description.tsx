interface Description {
  children?: any[] | JSX.Element[] | any;
}

export default function Description({ children }: Description) {
  const items = (children || []).map((item: any) => {
    if (
      (item.type.name === "DescriptionItem" &&
        process.env.NODE_ENV === "development") ||
      process.env.NODE_ENV === "production"
    ) {
      return item;
    } else {
      return null;
    }
  });

  return <div className="description">{items}</div>;
}

interface DescriptionItem {
  children?: any;
}

export const DescriptionItem = ({ children }: DescriptionItem) => {
  return <div className="description__item">{children}</div>;
};

interface DescriptionTitle {
  children?: any;
}

export const DescriptionTitle = ({ children }: DescriptionTitle) => {
  return <div className="description__title">{children}</div>;
};

interface DescriptionContent {
  children?: any;
}

export const DescriptionContent = ({ children }: DescriptionContent) => {
  return <div className="description__content">{children}</div>;
};

Description.Item = DescriptionItem;
Description.Title = DescriptionTitle;
Description.Content = DescriptionContent;
