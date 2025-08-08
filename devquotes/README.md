# DevQuotes Frontend

A modern React application for discovering, sharing, and voting on developer quotes. Built with React 18, Vite, and Tailwind CSS, this frontend provides a smooth and responsive user experience for the developer community to engage with programming wisdom and humor.

## Features

### Core Functionality
- **Random Quote Discovery**: Browse inspiring programming quotes with smooth transitions
- **Quote Submission**: Intuitive form with real-time validation and submission guidelines
- **Interactive Voting**: Upvote and downvote quotes with immediate visual feedback
- **Top Quotes Gallery**: Responsive grid showcasing the most popular quotes with rankings
- **Responsive Navigation**: Clean header with mobile-optimized navigation

### User Experience
- **Modern UI Design**: Clean, professional interface built with Tailwind CSS
- **Smooth Animations**: Polished interactions using CSS transitions and transforms
- **Loading States**: Skeleton screens and loading indicators for better perceived performance
- **Error Handling**: Graceful fallbacks with retry mechanisms and user-friendly messages
- **Form Validation**: Real-time validation with helpful error messages and character counts
- **Floating Action Button**: Quick access to quote submission from any page
- **Toast Notifications**: User feedback for successful actions and errors

## Tech Stack

- **React 18** - Modern React with concurrent features and hooks
- **Vite** - Fast build tool and development server with HMR
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **React Router v6** - Declarative client-side routing
- **Lucide React** - Beautiful, customizable icon library
- **Axios** - Promise-based HTTP client for API requests
- **Framer Motion** - Production-ready motion library for animations
- **React Hook Form** - Performant forms with easy validation

## Prerequisites

- **Node.js** v14.x or higher
- **npm** or **yarn** package manager
- Access to the DevQuotes backend API

## Installation & Setup

### Local Development

1. **Clone and navigate to frontend directory**
   ```bash
   git clone <repository-url>
   cd devquotes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment configuration**
   Create a `.env` file in the root directory:
   ```bash
   # API Base URL
   VITE_BASE_URL=http://localhost:8080/api/quotes
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at `http://localhost:4028`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run serve
```

## Project Structure

```
devquotes/
├── public/                     # Static assets
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/             # Reusable components
│   │   ├── ui/                # UI component library
│   │   │   ├── Button.jsx     # Customizable button component
│   │   │   ├── Input.jsx      # Form input with validation
│   │   │   ├── Select.jsx     # Dropdown select component
│   │   │   ├── Checkbox.jsx   # Checkbox with variants
│   │   │   ├── NavigationHeader.jsx
│   │   │   └── FloatingSubmitButton.jsx
│   │   ├── AppIcon.jsx        # Icon wrapper component
│   │   ├── AppImage.jsx       # Image with fallback
│   │   ├── ErrorBoundary.jsx  # Error boundary wrapper
│   │   └── ScrollToTop.jsx    # Route change scroll reset
│   ├── pages/                 # Page components
│   │   ├── home-random-quotes/
│   │   │   ├── components/
│   │   │   │   ├── QuoteCard.jsx
│   │   │   │   ├── LoadingState.jsx
│   │   │   │   └── ErrorState.jsx
│   │   │   └── index.jsx
│   │   ├── submit-quote/
│   │   │   ├── components/
│   │   │   │   ├── QuoteForm.jsx
│   │   │   │   ├── SubmissionGuidelines.jsx
│   │   │   │   └── SuccessMessage.jsx
│   │   │   └── index.jsx
│   │   ├── top-quotes/
│   │   │   ├── components/
│   │   │   │   ├── QuoteCard.jsx
│   │   │   │   ├── QuotesList.jsx
│   │   │   │   └── TopQuotesHeader.jsx
│   │   │   └── index.jsx
│   │   └── NotFound.jsx       # 404 error page
│   ├── services/              # API services
│   │   └── api.js            # HTTP client and API functions
│   ├── styles/               # Global styles
│   │   ├── tailwind.css      # Tailwind imports and custom styles
│   │   └── index.css         # Base styles
│   ├── utils/                # Utility functions
│   │   └── cn.js            # Class name utility (clsx + tailwind-merge)
│   ├── App.jsx               # Root application component
│   ├── Routes.jsx            # Application routing configuration
│   └── index.jsx             # Application entry point
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
├── index.html               # HTML template
├── jsconfig.json            # JavaScript configuration
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.mjs          # Vite configuration
└── README.md               # This file
```

## Environment Variables

```bash
# Required: Backend API URL
VITE_BASE_URL=http://localhost:8080/api/quotes

# Optional: Enable development features
VITE_NODE_ENV=development
```

## Available Scripts

```bash
# Development
npm start          # Start development server with HMR
npm run dev        # Alternative start command

# Production
npm run build      # Build for production
npm run serve      # Preview production build locally

# Maintenance
npm run lint       # Run ESLint (if configured)
npm run format     # Format code (if configured)
```

## Routing

### Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomeRandomQuotes | Random quotes discovery (home page) |
| `/home-random-quotes` | HomeRandomQuotes | Same as home |
| `/submit-quote` | SubmitQuote | Quote submission form |
| `/top-quotes` | TopQuotes | Top-rated quotes gallery |
| `/*` | NotFound | 404 error page |

### Route Features

#### Home/Random Quotes (`/`)
- **Random Quote Display**: Fetches and displays random quotes from the API
- **Interactive Voting**: Upvote/downvote with immediate UI feedback
- **Quote Refresh**: "Get New Quote" button for discovering more content
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Loading States**: Skeleton screens during data fetching
- **Error Handling**: Retry mechanisms for failed requests

#### Submit Quote (`/submit-quote`)
- **Form Validation**: Real-time validation with character limits (10-500)
- **Author Attribution**: Required author field with validation
- **Submission Guidelines**: Expandable guidelines for quality submissions
- **Success Confirmation**: Quote preview after successful submission
- **Character Counter**: Live character count with visual feedback
- **Form Reset**: Clean slate for submitting additional quotes

#### Top Quotes (`/top-quotes`)
- **Ranked Display**: Shows quotes with ranking badges (#1, #2, etc.)
- **Grid Layout**: Responsive grid (1-3 columns based on screen size)
- **Vote Counts**: Clear display of current vote totals
- **Interactive Voting**: Real-time voting with optimistic UI updates
- **Loading States**: Skeleton cards during data loading
- **Empty States**: Helpful messaging when no quotes exist

## API Integration

### API Service (`src/services/api.js`)

```javascript
// Base configuration
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Available functions
addQuote(quoteData)           // POST /api/quotes
getRandomQuote()              // GET /api/quotes/random
voteQuote(id, voteType)       // PUT /api/quotes/{id}/vote
getTopQuotes()                // GET /api/quotes/top
getAllQuotes()                // GET /api/quotes
```

### Error Handling

All API calls include comprehensive error handling:
- **Network errors**: Connection timeout and offline detection
- **HTTP errors**: Status code validation and meaningful error messages
- **Data validation**: Response format validation
- **User feedback**: Toast notifications for errors and success states

### Request/Response Flow

1. **Loading State**: UI shows loading indicators
2. **API Call**: Request sent with proper headers and error handling
3. **Success**: Data processed and UI updated
4. **Error**: Error state displayed with retry options
5. **Loading Complete**: Loading indicators removed

## Component Architecture

### Design System

#### UI Components (`src/components/ui/`)
All components follow a consistent API with:
- **Variants**: Multiple visual styles (primary, secondary, outline, ghost)
- **Sizes**: Responsive sizing options (xs, sm, default, lg, xl)
- **States**: Loading, disabled, error states
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

#### Button Component Example
```jsx
<Button
  variant="primary"
  size="lg"
  iconName="Plus"
  iconPosition="left"
  loading={isSubmitting}
  disabled={!isFormValid}
  onClick={handleSubmit}
>
  Submit Quote
</Button>
```

#### Form Components
- **Input**: Text inputs with labels, validation, and error states
- **Select**: Dropdown with search, multi-select, and custom options
- **Checkbox**: Single and group checkboxes with descriptions

### Page Components

Each page follows a consistent structure:
- **Main container**: Responsive layout with proper spacing
- **Header section**: Page title and description
- **Content area**: Main functionality
- **Loading states**: Skeleton screens and loading indicators
- **Error states**: User-friendly error messages with retry options

### State Management

#### Local State (useState)
- **Form data**: Input values and validation states
- **UI state**: Loading, error, and success states
- **User interactions**: Modal visibility, expanded sections

#### Effect Management (useEffect)
- **Data fetching**: API calls on component mount and updates
- **Cleanup**: Event listeners and subscriptions cleanup
- **Dependencies**: Proper dependency arrays for optimization

## Styling

### Tailwind CSS Configuration

#### Custom Design System
```css
:root {
  /* Core Colors */
  --color-background: #FEFEFE;
  --color-foreground: #1E293B;
  --color-primary: #2563EB;
  --color-accent: #F59E0B;
  
  /* State Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

#### Responsive Breakpoints
- **Mobile**: Default styling (mobile-first)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Desktop**: `xl:` prefix (1280px+)

#### Custom Utilities
```css
.shadow-elevation-1 { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06); }
.shadow-elevation-2 { box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); }
.transition-smooth { transition: all 150ms ease-out; }
```

### Component Styling Patterns

#### Container Layouts
```jsx
// Page container
<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

// Card container
<div className="bg-card border border-border rounded-lg p-6 shadow-elevation-1">

// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
```

#### Interactive Elements
```jsx
// Button states
<button className="bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary">

// Form inputs
<input className="border-border focus:ring-2 focus:ring-primary focus:border-transparent">

// Loading states
<div className="animate-pulse bg-muted rounded h-4 w-full">
```

## Performance Optimizations

### Code Splitting
- **Route-based splitting**: Automatic with React Router and Vite
- **Component lazy loading**: Dynamic imports for large components
- **Bundle analysis**: Optimized chunks for better caching

### Image Optimization
- **Fallback handling**: Graceful fallbacks for broken images
- **Lazy loading**: Images load as they enter viewport
- **Responsive images**: Proper sizing for different screen densities

### API Optimization
- **Request deduplication**: Prevent duplicate API calls
- **Caching strategies**: Local caching for frequently accessed data
- **Optimistic updates**: UI updates before server confirmation

### Build Optimization
- **Tree shaking**: Remove unused code from bundles
- **Asset optimization**: Compressed images and minified CSS/JS
- **Modern bundle targets**: Optimized for modern browsers

## Development Guidelines

### Code Standards

#### React Best Practices
```jsx
// Functional components with hooks
const QuoteCard = ({ quote, onVote, isVoting }) => {
  const [localState, setLocalState] = useState(initialValue);
  
  useEffect(() => {
    // Effect logic with proper dependencies
  }, [dependency]);
  
  return <div className="quote-card">...</div>;
};

// Proper prop types and defaults
QuoteCard.defaultProps = {
  isVoting: false,
  className: ''
};
```

#### File Naming Conventions
- **Components**: PascalCase (e.g., `QuoteCard.jsx`)
- **Utilities**: camelCase (e.g., `formatDate.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)
- **Styles**: kebab-case (e.g., `custom-utilities.css`)

### Testing Strategy

#### Component Testing
```jsx
// Example test structure
import { render, screen, fireEvent } from '@testing-library/react';
import QuoteCard from './QuoteCard';

test('renders quote content correctly', () => {
  const mockQuote = { content: 'Test quote', author: 'Test Author' };
  render(<QuoteCard quote={mockQuote} />);
  
  expect(screen.getByText('Test quote')).toBeInTheDocument();
});
```

#### API Testing
- **Mock API responses**: Test component behavior with various API states
- **Error scenarios**: Test error handling and user feedback
- **Loading states**: Verify loading indicators and skeleton screens

### Accessibility

#### ARIA Labels and Roles
```jsx
<button
  aria-label="Upvote this quote"
  role="button"
  tabIndex={0}
>
  <Icon name="ChevronUp" />
</button>
```

#### Keyboard Navigation
- **Tab order**: Logical tab sequence through interactive elements
- **Focus management**: Visible focus indicators and proper focus trapping
- **Keyboard shortcuts**: Common shortcuts for improved navigation

#### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Alt text**: Descriptive alt text for images and icons
- **Form labels**: Associated labels for all form inputs

## Deployment

### Build Configuration

```bash
# Environment-specific builds
npm run build                    # Production build
VITE_NODE_ENV=staging npm run build  # Staging build
```

### Static Hosting

The built application can be deployed to any static hosting service:

#### Netlify
```bash
# Build command
npm run build

# Publish directory
build
```

#### Vercel
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start"
}
```

#### Traditional Web Servers
```nginx
# Nginx configuration
server {
  listen 80;
  server_name your-domain.com;
  root /path/to/build;
  index index.html;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### Environment-Specific Configuration

#### Production
```bash
VITE_BASE_URL=https://api.your-domain.com/api/quotes
VITE_NODE_ENV=production
```

#### Staging
```bash
VITE_BASE_URL=https://api-staging.your-domain.com/api/quotes
VITE_NODE_ENV=staging
```

## Troubleshooting

### Common Issues

#### Development Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check port availability
lsof -ti:4028 | xargs kill -9  # Kill process on port 4028
npm start
```

#### Build Failures
```bash
# Check for TypeScript errors
npm run type-check

# Clear build cache
rm -rf build node_modules/.vite
npm run build
```

#### API Connection Issues
- Verify `VITE_BASE_URL` environment variable
- Check backend server is running
- Inspect network requests in browser dev tools
- Verify CORS configuration on backend

### Development Tips

#### Browser Developer Tools
- **Console**: Monitor for JavaScript errors and API responses
- **Network**: Inspect API requests and responses
- **Elements**: Debug styling and layout issues
- **Application**: Check local storage and environment variables

#### Hot Module Replacement (HMR)
- Changes to components automatically reload
- State preservation during development
- CSS changes apply without full page reload

## Contributing

### Development Workflow

1. **Setup development environment**
   ```bash
   git clone <repository-url>
   cd devquotes
   npm install
   cp .env.example .env  # Configure environment variables
   npm start
   ```

2. **Make your changes**
   - Follow React best practices and hooks patterns
   - Maintain responsive design principles
   - Write meaningful component and function names
   - Add appropriate comments for complex logic

3. **Test your changes**
   - Test on multiple screen sizes (mobile, tablet, desktop)
   - Verify all user interactions work correctly
   - Check error states and loading behaviors
   - Ensure accessibility requirements are met

4. **Submit your contribution**
   ```bash
   git checkout -b feature/your-feature-name
   git commit -m "feat: add quote search functionality"
   git push origin feature/your-feature-name
   ```
