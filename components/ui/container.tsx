// src/components/ui/container.tsx

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;
  