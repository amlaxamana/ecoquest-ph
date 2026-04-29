# EcoQuest PH: Gamified Sustainable Tourism & Environmental Monitoring System

A comprehensive platform that combines interactive map-based exploration with eco-challenges, quizzes, and decision-based simulations to promote sustainable tourism and environmental awareness in the Philippines.

## 🌍 Project Overview

EcoQuest PH is a full-stack application built with:
- **Frontend**: React + Vite
- **Backend**: Java Spring Boot
- **AI/ML Integration**: Google Cloud Vision API for image classification
- **Mapping**: Google Maps API

## 📋 Core Features

### 1. Map-Based Exploration
- Interactive destination mapping
- Real-time location tracking
- Environmental hotspot identification

### 2. Eco-Challenges
- Dynamic decision-based simulations
- Real-time scenario responses
- Interactive choices that affect EcoScore

### 3. Quiz System
- Adaptive difficulty based on user performance
- Environmental knowledge assessment
- Real-time feedback

### 4. Image Upload & AI Analysis
- AI-powered waste detection
- Forest damage identification
- Environmental impact assessment

### 5. EcoScore System
- Points-based scoring mechanism
- Decision impact tracking
- Leaderboard and achievements
- Real environmental data integration

## 🛠️ Tech Stack

### Frontend
- React 18+
- Vite
- TailwindCSS
- Axios
- Google Maps API
- React Router

### Backend
- Spring Boot 3.x
- Spring Data JPA
- Spring Security
- PostgreSQL
- Google Cloud Vision API
- Maven

## 📁 Project Structure

```
ecoquest-ph/
├── frontend/                 # React + Vite application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── hooks/           # Custom hooks
│   │   ├── context/         # Context API
│   │   ├── styles/          # Global styles
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/                  # Spring Boot application
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── com/ecoquest/
    │   │   │       ├── controller/
    │   │   │       ├── service/
    │   │   │       ├── repository/
    │   │   │       ├── model/
    │   │   │       ├── config/
    │   │   │       └── EcoquestApplication.java
    │   │   └── resources/
    │   │       └── application.yml
    │   └── test/
    ├── pom.xml
    └── Dockerfile
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ & npm
- Java 17+
- Maven 3.6+
- PostgreSQL 12+

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

## 📚 API Documentation

### Key Endpoints

#### Destinations
- `GET /api/destinations` - List all destinations
- `GET /api/destinations/{id}` - Get destination details
- `POST /api/destinations` - Create new destination

#### Challenges
- `GET /api/challenges` - List challenges
- `POST /api/challenges/{id}/respond` - Submit challenge response

#### Quizzes
- `GET /api/quizzes` - List quizzes
- `POST /api/quizzes/{id}/answer` - Submit quiz answer

#### Image Analysis
- `POST /api/images/analyze` - Analyze uploaded image with AI

#### EcoScore
- `GET /api/users/{id}/ecoscore` - Get user EcoScore
- `GET /api/leaderboard` - Get EcoScore leaderboard

## 🔐 Environment Variables

Create `.env` files in both frontend and backend directories:

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8080/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_GOOGLE_VISION_API_KEY=your_google_vision_key
```

### Backend (application.yml)
```
spring.datasource.url=jdbc:postgresql://localhost:5432/ecoquest_db
spring.datasource.username=postgres
spring.datasource.password=your_password
google.cloud.project-id=your_project_id
google.cloud.vision.api-key=your_api_key
```

## 🎮 How It Works

1. **User Exploration**: Users browse destinations on an interactive map
2. **Eco-Challenge Encounter**: Dynamic challenges appear during exploration
3. **Decision Making**: Users make choices that impact their EcoScore
4. **Quiz Completion**: Adaptive quizzes test environmental knowledge
5. **Image Analysis**: Upload images for AI-powered environmental damage detection
6. **Score Tracking**: Real-time EcoScore updates and leaderboard ranking

## 📊 EcoScore Calculation

- Base points from challenge responses
- Quiz performance multipliers
- Image analysis contributions
- Decision impact scoring
- Bonus points for achievements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Team

- **Development Lead**: amlaxamana

## 📞 Support

For support, email support@ecoquest.ph or open an issue on GitHub.

---

**Let's make sustainable tourism gamified! 🌱**
