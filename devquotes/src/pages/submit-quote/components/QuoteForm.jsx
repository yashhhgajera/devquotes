// import React, { useState } from 'react';
// import Button from '../../../components/ui/Button';
// import Input from '../../../components/ui/Input';
// import Icon from '../../../components/AppIcon';
// import { addQuote } from '../../../services/api';

// const QuoteForm = ({ isSubmitting = false, onSuccess }) =>  {
//   const [formData, setFormData] = useState({
//     content: '',
//     author: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [charCount, setCharCount] = useState(0);

//   const maxCharacters = 500;
//   const minCharacters = 10;

  

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData?.content?.trim()) {
//       newErrors.content = 'Quote content is required';
//     } else if (formData?.content?.trim()?.length < minCharacters) {
//       newErrors.content = `Quote must be at least ${minCharacters} characters long`;
//     } else if (formData?.content?.trim()?.length > maxCharacters) {
//       newErrors.content = `Quote must not exceed ${maxCharacters} characters`;
//     }

//     if (!formData?.author?.trim()) {
//       newErrors.author = 'Author name is required';
//     } else if (formData?.author?.trim()?.length < 2) {
//       newErrors.author = 'Author name must be at least 2 characters long';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors)?.length === 0;
//   };

//   const handleContentChange = (e) => {
//     const value = e?.target?.value;
//     setFormData(prev => ({ ...prev, content: value }));
//     setCharCount(value?.length);
    
//     // Clear content error when user starts typing
//     if (errors?.content && value?.trim()?.length >= minCharacters) {
//       setErrors(prev => ({ ...prev, content: '' }));
//     }
//   };

//   const handleAuthorChange = (e) => {
//     const value = e?.target?.value;
//     setFormData(prev => ({ ...prev, author: value }));
    
//     // Clear author error when user starts typing
//     if (errors?.author && value?.trim()?.length >= 2) {
//       setErrors(prev => ({ ...prev, author: '' }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e?.preventDefault();
    
//     if (validateForm()) {
//       addQuote({
//         content: formData?.content?.trim(),
//         author: formData?.author?.trim()
//       })
//         .then((res) => {
//           onSuccess?.({
//             content: formData?.content?.trim(),
//             author: formData?.author?.trim(),
//           });
//           setFormData({ content: '', author: '' });
//           setCharCount(0);
//         })
//         .catch((err) => {
//           console.error('Submission failed:', err);
//           alert('Failed to submit quote.');
//         });


//     }
//   };

//   const isFormValid = formData?.content?.trim()?.length >= minCharacters && 
//                      formData?.content?.trim()?.length <= maxCharacters &&
//                      formData?.author?.trim()?.length >= 2;

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Quote Content Field */}
//       <div className="space-y-2">
//         <label htmlFor="quote-content" className="block text-sm font-medium text-foreground">
//           Quote Content *
//         </label>
//         <div className="relative">
//           <textarea
//             id="quote-content"
//             name="content"
//             value={formData?.content}
//             onChange={handleContentChange}
//             placeholder="Share your favorite programming wisdom, humor, or insight that resonates with the developer community..."
//             className={`
//               w-full min-h-[120px] px-3 py-2 text-sm border rounded-md resize-y
//               bg-input text-foreground placeholder:text-muted-foreground
//               focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
//               disabled:cursor-not-allowed disabled:opacity-50
//               ${errors?.content ? 'border-error focus:ring-error' : 'border-border'}
//             `}
//             disabled={isSubmitting}
//             maxLength={maxCharacters}
//             rows={4}
//           />
//           <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
//             <span className={charCount > maxCharacters ? 'text-error' : ''}>
//               {charCount}/{maxCharacters}
//             </span>
//           </div>
//         </div>
//         {errors?.content && (
//           <p className="text-sm text-error flex items-center gap-1">
//             <Icon name="AlertCircle" size={14} />
//             {errors?.content}
//           </p>
//         )}
//       </div>
//       {/* Author Field */}
//       <div className="space-y-2">
//         <Input
//           label="Author *"
//           type="text"
//           id="quote-author"
//           name="author"
//           value={formData?.author}
//           onChange={handleAuthorChange}
//           placeholder="Enter the author's name (e.g., Linus Torvalds, Anonymous, etc.)"
//           error={errors?.author}
//           disabled={isSubmitting}
//           maxLength={100}
//         />
//       </div>
//       {/* Submit Button */}
//       <div className="pt-4">
//         <Button
//           type="submit"
//           variant="default"
//           size="lg"
//           fullWidth
//           disabled={!isFormValid || isSubmitting}
//           loading={isSubmitting}
//           iconName={isSubmitting ? "Loader2" : "Send"}
//           iconPosition="left"
//         >
//           {isSubmitting ? 'Submitting Quote...' : 'Submit Quote'}
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default QuoteForm;








import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const QuoteForm = ({ isSubmitting = false, onSubmit }) => {
  const [formData, setFormData] = useState({
    content: '',
    author: ''
  });
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  const maxCharacters = 500;
  const minCharacters = 10;

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.content?.trim()) {
      newErrors.content = 'Quote content is required';
    } else if (formData?.content?.trim()?.length < minCharacters) {
      newErrors.content = `Quote must be at least ${minCharacters} characters long`;
    } else if (formData?.content?.trim()?.length > maxCharacters) {
      newErrors.content = `Quote must not exceed ${maxCharacters} characters`;
    }

    if (!formData?.author?.trim()) {
      newErrors.author = 'Author name is required';
    } else if (formData?.author?.trim()?.length < 2) {
      newErrors.author = 'Author name must be at least 2 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleContentChange = (e) => {
    const value = e?.target?.value;
    setFormData(prev => ({ ...prev, content: value }));
    setCharCount(value?.length);

    if (errors?.content && value?.trim()?.length >= minCharacters) {
      setErrors(prev => ({ ...prev, content: '' }));
    }
  };

  const handleAuthorChange = (e) => {
    const value = e?.target?.value;
    setFormData(prev => ({ ...prev, author: value }));

    if (errors?.author && value?.trim()?.length >= 2) {
      setErrors(prev => ({ ...prev, author: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({
        content: formData?.content?.trim(),
        author: formData?.author?.trim()
      });

      // Do NOT clear form here. Parent will reset after success.
    }
  };

  const isFormValid = formData?.content?.trim()?.length >= minCharacters &&
                     formData?.content?.trim()?.length <= maxCharacters &&
                     formData?.author?.trim()?.length >= 2;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Quote Content Field */}
      <div className="space-y-2">
        <label htmlFor="quote-content" className="block text-sm font-medium text-foreground">
          Quote Content *
        </label>
        <div className="relative">
          <textarea
            id="quote-content"
            name="content"
            value={formData?.content}
            onChange={handleContentChange}
            placeholder="Share your favorite programming wisdom, humor, or insight that resonates with the developer community..."
            className={`
              w-full min-h-[120px] px-3 py-2 text-sm border rounded-md resize-y
              bg-input text-foreground placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
              disabled:cursor-not-allowed disabled:opacity-50
              ${errors?.content ? 'border-error focus:ring-error' : 'border-border'}
            `}
            disabled={isSubmitting}
            maxLength={maxCharacters}
            rows={4}
          />
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            <span className={charCount > maxCharacters ? 'text-error' : ''}>
              {charCount}/{maxCharacters}
            </span>
          </div>
        </div>
        {errors?.content && (
          <p className="text-sm text-error flex items-center gap-1">
            <Icon name="AlertCircle" size={14} />
            {errors?.content}
          </p>
        )}
      </div>
      {/* Author Field */}
      <div className="space-y-2">
        <Input
          label="Author *"
          type="text"
          id="quote-author"
          name="author"
          value={formData?.author}
          onChange={handleAuthorChange}
          placeholder="Enter the author's name (e.g., Linus Torvalds, Anonymous, etc.)"
          error={errors?.author}
          disabled={isSubmitting}
          maxLength={100}
        />
      </div>
      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          disabled={!isFormValid || isSubmitting}
          loading={isSubmitting}
          iconName={isSubmitting ? "Loader2" : "Send"}
          iconPosition="left"
        >
          {isSubmitting ? 'Submitting Quote...' : 'Submit Quote'}
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;
