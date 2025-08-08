// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavigationHeader from '../../components/ui/NavigationHeader';
// import FloatingSubmitButton from '../../components/ui/FloatingSubmitButton';
// import QuoteForm from './components/QuoteForm';
// import SubmissionGuidelines from './components/SubmissionGuidelines';
// import SuccessMessage from './components/SuccessMessage';
// import Icon from '../../components/AppIcon';

// const SubmitQuote = () => {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionSuccess, setSubmissionSuccess] = useState(false);
//   const [submittedQuote, setSubmittedQuote] = useState(null);

//   // Mock API call for quote submission
//   const submitQuote = async (quoteData) => {
//     setIsSubmitting(true);
    
//     try {
//       // Simulate API call delay
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // Mock successful submission
//       const newQuote = {
//         id: Date.now(),
//         content: quoteData?.content,
//         author: quoteData?.author,
//         votes: 0,
//         createdAt: new Date()?.toISOString()
//       };
      
//       setSubmittedQuote(newQuote);
//       setSubmissionSuccess(true);
      
//     } catch (error) {
//       console.error('Error submitting quote:', error);
//       // In a real app, you would handle the error appropriately
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSubmitAnother = () => {
//     setSubmissionSuccess(false);
//     setSubmittedQuote(null);
//   };

//   const handleBreadcrumbNavigation = (path) => {
//     navigate(path);
//   };

//   if (submissionSuccess) {
//     return (
//       <div className="min-h-screen bg-background">
//         <NavigationHeader />
//         <FloatingSubmitButton />
        
//         <main className="pt-16 lg:pt-18">
//           <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <SuccessMessage 
//               submittedQuote={submittedQuote}
//               onSubmitAnother={handleSubmitAnother}
//             />
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <NavigationHeader />
//       <FloatingSubmitButton />
      
//       <main className="pt-16 lg:pt-18">
//         <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Breadcrumb Navigation */}
//           <nav className="flex items-center space-x-2 text-sm mb-6" aria-label="Breadcrumb">
//             <button
//               onClick={() => handleBreadcrumbNavigation('/home-random-quotes')}
//               className="text-muted-foreground hover:text-foreground transition-smooth flex items-center gap-1"
//             >
//               <Icon name="Home" size={14} />
//               Home
//             </button>
//             <Icon name="ChevronRight" size={14} className="text-muted-foreground" />
//             <span className="text-foreground font-medium">Submit Quote</span>
//           </nav>

//           {/* Page Header */}
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                 <Icon name="Plus" size={24} className="text-primary" />
//               </div>
//             </div>
//             <h1 className="text-2xl font-bold text-foreground mb-2">
//               Submit New Quote
//             </h1>
//             <p className="text-sm text-muted-foreground max-w-md mx-auto">
//               Share inspiring programming wisdom or humor with the developer community. Your contribution helps others learn and stay motivated.
//             </p>
//           </div>

//           {/* Submission Form */}
//           <div className="space-y-6">
//             <div className="bg-card rounded-lg border border-border p-6 shadow-elevation-1">
//               <QuoteForm 
//                 onSubmit={submitQuote}
//                 isSubmitting={isSubmitting}
//               />
//             </div>

//             {/* Submission Guidelines */}
//             <SubmissionGuidelines />

//             {/* Community Stats */}
//             <div className="bg-muted/50 rounded-lg p-4 border border-border">
//               <div className="flex items-center justify-center gap-6 text-center">
//                 <div>
//                   <div className="text-lg font-semibold text-foreground">1,247</div>
//                   <div className="text-xs text-muted-foreground">Total Quotes</div>
//                 </div>
//                 <div className="w-px h-8 bg-border"></div>
//                 <div>
//                   <div className="text-lg font-semibold text-foreground">892</div>
//                   <div className="text-xs text-muted-foreground">Contributors</div>
//                 </div>
//                 <div className="w-px h-8 bg-border"></div>
//                 <div>
//                   <div className="text-lg font-semibold text-foreground">15.2k</div>
//                   <div className="text-xs text-muted-foreground">Total Votes</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SubmitQuote;



import React, { useState } from 'react';
import NavigationHeader from '../../components/ui/NavigationHeader';
import FloatingSubmitButton from '../../components/ui/FloatingSubmitButton';
import QuoteForm from './components/QuoteForm';
import SubmissionGuidelines from './components/SubmissionGuidelines';
import SuccessMessage from './components/SuccessMessage';
import Icon from '../../components/AppIcon';
import { addQuote } from '../../services/api';

const SubmitQuote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  const handleSubmit = async (quoteData) => {
    setIsSubmitting(true);
    try {
      const response = await addQuote(quoteData);
      setSubmittedQuote(response);
      setSubmissionSuccess(true);
    } catch (err) {
      console.error('Error submitting quote:', err);
      alert('Failed to submit quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitAnother = () => {
    setSubmissionSuccess(false);
    setSubmittedQuote(null);
  };

  if (submissionSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <NavigationHeader />
        <FloatingSubmitButton />
        <main className="pt-16 lg:pt-18">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SuccessMessage
              submittedQuote={submittedQuote}
              onSubmitAnother={handleSubmitAnother}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <FloatingSubmitButton />
      <main className="pt-16 lg:pt-18">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs or header here if you want */}
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Plus" size={24} className="text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Submit New Quote</h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Share inspiring programming wisdom or humor with the developer community. Your contribution helps others learn and stay motivated.
            </p>
          </div>

          {/* Quote Submission Form */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6 shadow-elevation-1">
              <QuoteForm
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
              />
            </div>
            <SubmissionGuidelines />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmitQuote;
