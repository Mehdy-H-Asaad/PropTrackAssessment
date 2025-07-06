# PropTrack - Real Estate Management System

A comprehensive real estate management platform built with React, TypeScript, and MERN stack. Features a public-facing property listing website and a powerful agent dashboard for property management.

![PropTrack](https://img.shields.io/badge/React-18.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)
![Node.js](https://img.shields.io/badge/Node.js-18.0-green)

## 📸 Project Showcase

- **📹 Demo Video**: [Watch the full demo](https://drive.google.com/drive/u/2/folders/169CKa2g5kwwrFUySSbJ3nX41XXn7EzLH)
- **🖼️ Screenshots**: [View all screenshots](https://drive.google.com/drive/folders/169CKa2g5kwwrFUySSbJ3nX41XXn7EzLH?usp=drive_link)

## 🏠 Live Demo

- **Public Website**: [Coming Soon]
- **Agent Dashboard**: [Coming Soon]

## ✨ Features

### Public Website

#### Homepage

- **Hero Section**: Animated hero with call-to-action using Framer Motion
- **Welcome Section**: Company introduction with key features and benefits
- **Services Section**: Property management, sales & marketing, valuation, compliance, and construction services
- **Featured Properties**: 3 featured properties on the homepage
- **FAQs**: Expandable accordion interface for common user questions
- **Contact Section**: WhatsApp, Email, and physical address (Google Maps is a recommended future improvement)
- **Footer**: Company details and quick links
- **Dark/Light Mode**: Toggle based on system preferences

#### Property Listings

- **Advanced Filtering**: Price range, location, type (rent/sale), bedrooms, bathrooms, amenities
- **Infinite Scrolling**: Implemented with useInfiniteQuery (React Query)
- **Responsive Property Cards**: Displaying images, key details, and pricing
- **Single Property Page**: Image gallery, full information, and related properties
- **Contact Options**: WhatsApp and phone call integration
- **Client Inquiry Form**: Available on each property page
- **Property Status Management**: Active/inactive display

### Agent Dashboard

#### Dashboard Layout

- **Responsive Design**: Sidebar navigation (Properties, Clients, Viewings)
- **Modern UI**: Built with ShadCN components
- **Property Management**: Full CRUD operations - create, update, archive, delete
- **TanStack Table**: Integration with pagination (server/client), column filtering, visibility toggles
- **Amenities Management**: Included in property forms

#### Client & Viewing Management

- **Client Inquiries**: Captured from public website
- **Auto-populate Dashboard**: Inquiries appear with contact details
- **Client Data Table**: Search and filters functionality
- **Manual Viewing Scheduling**: Assign to client and property with date/time
- **Status Tracking**: Scheduled, Completed, Cancelled, No-show
- **AI-powered Assistant**: Using DeepSeek to parse natural text like 'next Monday at 3PM'
- **Notes System**: Add notes and updates per viewing

### Technical Features

- **State Management**: Zustand for centralized global state
- **API Management**: Custom React Query hooks for modular API calls
- **Form Validation**: React Hook Form + Zod for validation and error handling
- **Notifications**: Toast notifications using Sonner
- **Loading States**: Skeleton components throughout
- **Accessibility**: ARIA labels and keyboard navigation
- **Responsive Design**: Mobile-first with dark/light themes

### Backend & Infrastructure

- **Database**: MongoDB integration for data persistence
- **API**: RESTful endpoints with error middleware
- **HTTP Client**: Axios setup with error handling and interceptors
- **AI Integration**: DeepSeek for scheduling viewings
- **Type Safety**: TypeScript-first codebase for maintainability

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/PropTrack.git
   cd PropTrack
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**

   Create `.env` files in both client and server directories:

   **Server (.env)**

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   DEEPSEEK_API_KEY=your_deepseek_api_key
   ```

   **Client (.env)**

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the development servers**

   **Terminal 1 - Start the backend server**

   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Start the frontend client**

   ```bash
   cd client
   npm run dev
   ```

5. **Open your browser**
   - Public Website: http://localhost:5173
   - Agent Dashboard: http://localhost:5173/dashboard

## 📁 Project Structure

```
PropTrack/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── features/       # Feature-based modules
│   │   │   ├── dashboard/  # Agent dashboard
│   │   │   ├── home/       # Public homepage
│   │   │   ├── properties/ # Property management
│   │   │   ├── viewings/   # Viewing management
│   │   │   └── clients/    # Client management
│   │   ├── shared/         # Shared utilities and hooks
│   │   └── lib/           # Third-party library configs
│   └── public/            # Static assets
├── server/                # Backend Node.js application
│   ├── src/
│   │   ├── controllers/   # API route handlers
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utility functions
│   └── package.json
└── README.md
```

## 🛠️ Available Scripts

### Client (Frontend)

```bash
cd client
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Server (Backend)

```bash
cd server
npm run dev          # Start development server with nodemon
npm start           # Start production server
npm run build       # Build TypeScript
```

## 🔧 Configuration

### API Endpoints

The application uses the following main API endpoints:

- `GET /api/properties` - Get all properties
- `POST /api/properties` - Create new property
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property
- `GET /api/viewings` - Get all viewings
- `POST /api/viewings` - Create new viewing
- `POST /api/ai/generate-viewing` - AI-powered viewing generation
- `POST /api/clients/inquiry` - Create client inquiry

### Database Schema

The application uses MongoDB with the following main collections:

- `properties` - Property listings
- `viewings` - Property viewings
- `clients` - Client inquiries

## 🎨 UI Components

The project uses ShadCN UI components for a consistent and modern design:

- **Data Tables**: TanStack Table integration
- **Forms**: React Hook Form with Zod validation
- **Dialogs**: Modal dialogs for forms and confirmations
- **Buttons**: Consistent button styling
- **Inputs**: Form inputs with validation
- **Select**: Dropdown selections
- **Accordion**: Expandable content sections

## 🔮 Future Improvements

### SEO & Performance

- Use Next.js for the public-facing website for better SEO and performance
- Implement image optimization and lazy loading
- Add meta tags and structured data

### Enhanced Features

- **Real Image Upload**: Replace placeholder images with actual upload functionality
- **Map Integration**: Google Maps or Leaflet for property locations
- **Authentication**: Role-based access control (admin vs agent)
- **Email Notifications**: For inquiries and viewing updates
- **Property Favoriting**: Allow users to save properties
- **Analytics Dashboard**: Property performance metrics
- **Property Comparison**: Side-by-side property comparison
- **Virtual Tours**: 360° property tours
- **Multi-language Support**: RTL/LTR language support
- **Payment Processing**: Deposits and rental payments

### Technical Enhancements

- **Testing**: Unit and integration tests
- **Caching**: Implement caching strategies
- **Monitoring**: Add logging and monitoring
- **Rate Limiting**: API rate limiting
- **API Documentation**: Swagger/OpenAPI docs
- **PWA Features**: Progressive web app capabilities
- **Offline Support**: Service worker implementation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Initial work_ - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [ShadCN UI](https://ui.shadcn.com/) for the beautiful component library
- [TanStack Table](https://tanstack.com/table) for powerful data tables
- [React Query](https://tanstack.com/query) for server state management
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [DeepSeek](https://www.deepseek.com/) for AI-powered viewing generation

## 📞 Support

If you have any questions or need support, please open an issue on GitHub or contact us at info@prop-track.com.

---

**Built with ❤️ using React, TypeScript, and MERN stack**
