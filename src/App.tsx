import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Preloader from "./components/Preloader";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
=======
import Index from "./pages/Index";
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
<<<<<<< HEAD
      <Preloader />
=======
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
          <Route path="/gallery" element={<Gallery />} />
=======
>>>>>>> 13d93773cb354053cb943c39c4478d1e0d3ecaa0
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
