
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop here
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl space-y-8 animate-fade-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            CHAT WITH ANY PDF
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Effortlessly chat with any PDF using RAG For Students and Professionals
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/chat")}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Go to Chats
          </button>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`mt-8 p-8 border-2 border-dashed rounded-lg transition-all duration-200 ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Upload your file here</p>
              <p className="text-sm text-muted-foreground">
                Drag and drop your PDF or click to browse
              </p>
            </div>
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity cursor-pointer"
            >
              Choose File
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
