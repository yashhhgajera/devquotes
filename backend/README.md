# Developer Quote Voting App - Backend

A Spring Boot REST API for managing and voting on developer quotes. This application allows users to add quotes, vote on them, and retrieve popular quotes.

## Features

- **Add Quotes**: Submit new developer quotes with author attribution
- **Random Quotes**: Get a random quote from the collection
- **Voting System**: Upvote or downvote quotes to show appreciation
- **Top Quotes**: Retrieve the most popular quotes based on votes
- **Quote Management**: View all quotes in the system

## Tech Stack

- **Java 24** - Programming language
- **Spring Boot 3.5.4** - Application framework
- **Spring Data JPA** - Data persistence
- **PostgreSQL** - Database
- **Lombok** - Code generation
- **Maven** - Build tool
- **Docker** - Containerization

## Prerequisites

- Java 24 or higher
- Maven 3.9.11 or higher
- PostgreSQL database
- Docker (optional)

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/devquotes/backend/
│   │   │       ├── BackendApplication.java
│   │   │       ├── config/
│   │   │       │   └── WebConfig.java
│   │   │       ├── controller/
│   │   │       │   └── QuoteController.java
│   │   │       ├── models/
│   │   │       │   ├── Quote.java
│   │   │       │   └── VoteTypeEnum.java
│   │   │       ├── repositories/
│   │   │       │   └── QuoteRepository.java
│   │   │       └── services/
│   │   │           └── QuoteService.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── Dockerfile
├── pom.xml
└── README.md
```

## Environment Variables

Create a `.env` file or set the following environment variables:

```bash
DB_URL=jdbc:postgresql://localhost:5432/devquotes
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DRIVER_CLASS_NAME=org.postgresql.Driver
FRONTEND_URL=http://localhost:3000
```

## Installation & Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Set up PostgreSQL database**
   ```sql
   CREATE DATABASE devquotes;
   ```

3. **Configure environment variables**
   Set the required environment variables in your system or IDE.

4. **Run the application**
   ```bash
   ./mvnw spring-boot:run
   ```
   
   Or using Maven directly:
   ```bash
   mvn spring-boot:run
   ```

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t devquotes-backend .
   ```

2. **Run with Docker**
   ```bash
   docker run -p 8080:8080 \
     -e DB_URL=jdbc:postgresql://host.docker.internal:5432/devquotes \
     -e DB_USERNAME=your_username \
     -e DB_PASSWORD=your_password \
     -e DB_DRIVER_CLASS_NAME=org.postgresql.Driver \
     -e FRONTEND_URL=http://localhost:3000 \
     devquotes-backend
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

### CORS Configuration
The application is configured to accept requests from the frontend URL specified in the `FRONTEND_URL` environment variable.

### Database Configuration
- Uses PostgreSQL with JPA/Hibernate
- Automatic schema updates enabled (`hibernate.ddl-auto=update`)
- SQL logging enabled for development

## Development

### Running Tests
```bash
./mvnw test
```

### Building for Production
```bash
./mvnw clean package -DskipTests
```

### Code Style
The project uses Lombok for reducing boilerplate code. Make sure your IDE has Lombok plugin installed and annotation processing enabled.

## Docker Multi-stage Build

The Dockerfile uses a multi-stage build process:

1. **Build Stage**: Compiles the application using Maven
2. **Runtime Stage**: Creates a minimal runtime image with only the JAR file

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository.

---

**Note**: Make sure to configure your database connection and environment variables before running the application.