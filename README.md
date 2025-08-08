# Developer Quote Voting App

A full-stack application for sharing and voting on developer quotes, built with React frontend and Spring Boot backend. This community-driven platform allows developers to discover, share, and appreciate programming wisdom and humor.

## Features

### Core Functionality
- **Random Quotes**: Discover inspiring programming quotes with each visit
- **Quote Submission**: Share your favorite developer wisdom with the community
- **Voting System**: Upvote and downvote quotes to curate the best content
- **Top Quotes**: Browse the most popular quotes ranked by community votes
- **Responsive Design**: Seamless experience across desktop and mobile devices

### User Experience
- **Modern UI**: Clean, professional interface built with Tailwind CSS
- **Smooth Animations**: Polished interactions using Framer Motion
- **Loading States**: Skeleton loading and proper error handling
- **Toast Notifications**: User feedback for all actions
- **Floating Action Button**: Quick access to quote submission

## Tech Stack

### Frontend (React)
- **React 18** - Modern React with concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Lucide React** - Modern icon library
- **Axios** - HTTP client for API requests
- **Framer Motion** - Animation library

### Backend (Spring Boot)
- **Java 24** - Programming language
- **Spring Boot 3.5.4** - Application framework
- **Spring Data JPA** - Data persistence
- **PostgreSQL** - Database
- **Lombok** - Code generation
- **Maven** - Build tool

### Infrastructure
- **Docker** - Containerization
- **CORS** - Cross-Origin Resource Sharing configuration

## Prerequisites

- **Node.js** (v14.x or higher)
- **Java 24** or higher
- **Maven** 3.9.11 or higher
- **PostgreSQL** database
- **Docker** (optional)

## Project Structure

```
devquotes/
├── backend/                    # Spring Boot API
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/devquotes/backend/
│   │   │   │       ├── BackendApplication.java
│   │   │   │       ├── config/
│   │   │   │       │   └── WebConfig.java
│   │   │   │       ├── controller/
│   │   │   │       │   └── QuoteController.java
│   │   │   │       ├── models/
│   │   │   │       │   ├── Quote.java
│   │   │   │       │   └── VoteTypeEnum.java
│   │   │   │       ├── repositories/
│   │   │   │       │   └── QuoteRepository.java
│   │   │   │       └── services/
│   │   │   │           └── QuoteService.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── Dockerfile
│   └── pom.xml
├── devquotes/                  # React Frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── ui/            # UI components
│   │   │   ├── AppIcon.jsx    # Icon component
│   │   │   └── AppImage.jsx   # Image component
│   │   ├── pages/             # Page components
│   │   │   ├── home-random-quotes/
│   │   │   ├── submit-quote/
│   │   │   ├── top-quotes/
│   │   │   └── NotFound.jsx
│   │   ├── services/          # API services
│   │   │   └── api.js
│   │   ├── styles/            # Global styles
│   │   ├── utils/             # Utility functions
│   │   ├── App.jsx
│   │   └── Routes.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.mjs
└── README.md
```

## Environment Variables

### Backend Configuration
Create environment variables for the Spring Boot backend:

```bash
# Database Configuration
DB_URL=jdbc:postgresql://localhost:5432/devquotes
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DRIVER_CLASS_NAME=org.postgresql.Driver

# CORS Configuration
FRONTEND_URL=http://localhost:4028
```

### Frontend Configuration
Create a `.env` file in the `devquotes/` directory:

```bash
# API Base URL
VITE_BASE_URL=http://localhost:8080/api/quotes
```

## Installation & Setup

### Backend Setup (Spring Boot)

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Set up PostgreSQL database**
   ```sql
   CREATE DATABASE devquotes;
   ```

3. **Configure environment variables**
   Set the required environment variables in your system or IDE.

4. **Install dependencies and run**
   ```bash
   ./mvnw spring-boot:run
   ```
   
   Or using Maven directly:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   The backend will be available at `http://localhost:8080`

### Frontend Setup (React)

1. **Navigate to the frontend directory**
   ```bash
   cd devquotes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment file**
   Create a `.env` file with the required environment variables.

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

   The frontend will be available at `http://localhost:4028`

### Quick Start (Both Services)

1. **Start the backend** (Terminal 1):
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

2. **Start the frontend** (Terminal 2):
   ```bash
   cd devquotes
   npm install
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:4028`

### Docker Deployment

#### Backend Docker

1. **Build the backend Docker image**
   ```bash
   cd backend
   docker build -t devquotes-backend .
   ```

2. **Run the backend with Docker**
   ```bash
   docker run -p 8080:8080 \
     -e DB_URL=jdbc:postgresql://host.docker.internal:5432/devquotes \
     -e DB_USERNAME=your_username \
     -e DB_PASSWORD=your_password \
     -e DB_DRIVER_CLASS_NAME=org.postgresql.Driver \
     -e FRONTEND_URL=http://localhost:4028 \
     devquotes-backend
   ```

#### Frontend Docker (Optional)

You can also containerize the frontend by creating a Dockerfile in the `devquotes/` directory:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## API Endpoints

### Base URL
```
http://localhost:8080/api/quotes
```

### Available Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/` | Add a new quote | `Quote` object |
| `GET` | `/random` | Get a random quote | None |
| `PUT` | `/{id}/vote?voteType={UP\|DOWN}` | Vote on a quote | None |
| `GET` | `/top?limit={number}` | Get top quotes (default: 10) | None |
| `GET` | `/` | Get all quotes | None |

### Request/Response Examples

#### Add a Quote
```http
POST /api/quotes
Content-Type: application/json

{
  "author": "Linus Torvalds",
  "content": "Talk is cheap. Show me the code."
}
```

#### Vote on a Quote
```http
PUT /api/quotes/{quote-id}/vote?voteType=UP
```

#### Get Top Quotes
```http
GET /api/quotes/top?limit=5
```

### Response Format

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "author": "Linus Torvalds",
  "content": "Talk is cheap. Show me the code.",
  "votes": 42
}
```

## Frontend Routes

### Available Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomeRandomQuotes | Random quotes discovery page |
| `/home-random-quotes` | HomeRandomQuotes | Random quotes (same as home) |
| `/submit-quote` | SubmitQuote | Quote submission form |
| `/top-quotes` | TopQuotes | Top-rated quotes gallery |
| `/*` | NotFound | 404 error page |

### Features by Page

#### Home/Random Quotes (`/`)
- Display random quotes from the database
- Upvote/downvote functionality
- "Get New Quote" button for refreshing
- Responsive quote card design
- Loading states and error handling

#### Submit Quote (`/submit-quote`)
- Quote submission form with validation
- Character count (10-500 characters)
- Author attribution (required)
- Submission guidelines
- Success confirmation with submitted quote preview

#### Top Quotes (`/top-quotes`)
- Grid layout of top-rated quotes
- Ranking badges (#1, #2, #3, etc.)
- Vote counts display
- Real-time voting with optimistic UI updates
- Responsive grid (1-3 columns based on screen size)

## Data Model

### Quote Entity
```java
{
  "id": "UUID",           // Auto-generated
  "author": "String",     // Max 100 characters, required
  "content": "String",    // Max 500 characters, required  
  "votes": "Integer"      // Default: 0
}
```

### Vote Types
- `UP` - Increases vote count by 1
- `DOWN` - Decreases vote count by 1

## Configuration

### Backend Configuration

#### CORS Configuration
The application is configured to accept requests from the frontend URL specified in the `FRONTEND_URL` environment variable.

#### Database Configuration
- Uses PostgreSQL with JPA/Hibernate
- Automatic schema updates enabled (`hibernate.ddl-auto=update`)
- SQL logging enabled for development

#### Application Properties
```properties
# Database
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=${DB_DRIVER_CLASS_NAME}

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.show-sql=true

# CORS
frontend.url=${FRONTEND_URL}
```

### Frontend Configuration

#### Vite Configuration
- Development server on port 4028
- Build output to `/build` directory
- Path mapping configured via `jsconfig.json`
- Component tagging for development tools

#### Tailwind Configuration
- Custom color system with CSS variables
- Responsive design utilities
- Animation and transition utilities
- Custom component variants

## Development

### Backend Development

#### Running Tests
```bash
cd backend
./mvnw test
```

#### Building for Production
```bash
./mvnw clean package -DskipTests
```

#### Code Style
The project uses Lombok for reducing boilerplate code. Make sure your IDE has Lombok plugin installed and annotation processing enabled.

### Frontend Development

#### Available Scripts

```bash
# Development server
npm start

# Build for production
npm run build

# Preview production build
npm run serve
```

#### Component Development
- All components are in `src/components/`
- UI components follow a consistent pattern with variants
- Pages are in `src/pages/` with their own component folders
- Styles use Tailwind CSS with custom CSS variables for theming

#### API Integration
- API calls are centralized in `src/services/api.js`
- Uses async/await with proper error handling
- Base URL configured via environment variables

### Code Quality

#### Frontend Standards
- **ESLint**: Code linting and formatting
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized with Vite build system
- **Error Boundaries**: Graceful error handling

## Deployment

### Production Build

#### Backend
```bash
cd backend
./mvnw clean package -DskipTests
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

#### Frontend
```bash
cd devquotes
npm run build
# Build files will be in the /build directory
```

### Environment-Specific Configuration

#### Production Environment Variables
```bash
# Backend
DB_URL=jdbc:postgresql://prod-db-host:5432/devquotes
DB_USERNAME=prod_user
DB_PASSWORD=secure_password
FRONTEND_URL=https://your-domain.com

# Frontend
VITE_BASE_URL=https://api.your-domain.com/api/quotes
```

#### Staging Environment Variables
```bash
# Backend
DB_URL=jdbc:postgresql://staging-db-host:5432/devquotes_staging
FRONTEND_URL=https://staging.your-domain.com

# Frontend
VITE_BASE_URL=https://api-staging.your-domain.com/api/quotes
```

### Docker Multi-stage Build

### Docker Multi-stage Build

The backend Dockerfile uses a multi-stage build process:

1. **Build Stage**: Compiles the application using Maven
2. **Runtime Stage**: Creates a minimal runtime image with only the JAR file

## Features Deep Dive

### Quote Voting System
- **Upvote/Downvote**: Users can vote on quotes to show appreciation or disapproval
- **Real-time Updates**: Vote counts update immediately in the UI
- **Optimistic Updates**: UI updates before server confirmation for better UX
- **Vote Validation**: Backend validates vote types and quote existence

### Responsive Design
- **Mobile-First**: Designed primarily for mobile devices with desktop enhancements
- **Flexible Grid**: Quote layouts adapt to screen size (1-3 columns)
- **Touch-Friendly**: Large tap targets for mobile interactions
- **Navigation**: Responsive header with mobile-optimized navigation

### User Experience Features
- **Loading States**: Skeleton screens during data fetching
- **Error Handling**: Graceful fallbacks for failed requests
- **Form Validation**: Real-time validation with helpful error messages
- **Success Feedback**: Confirmation messages for completed actions
- **Floating Action Button**: Quick access to quote submission from any page

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting with React Router
- **Optimized Images**: Fallback images and proper loading states
- **Lazy Loading**: Components loaded on demand
- **Build Optimization**: Vite's optimized production builds
- **Database Indexing**: Optimized queries for vote counts and random selection

## Troubleshooting

### Common Issues

#### Backend Issues
- **Database Connection Failed**: Verify PostgreSQL is running and connection details are correct
- **Port 8080 Already in Use**: Change the server port in `application.properties`
- **CORS Errors**: Ensure `FRONTEND_URL` environment variable matches the frontend URL

#### Frontend Issues
- **API Connection Failed**: Verify `VITE_BASE_URL` points to the correct backend URL
- **Port 4028 Already in Use**: Change port in `vite.config.mjs`
- **Build Errors**: Clear `node_modules` and reinstall dependencies
