# Invoice Bhejo 🧾

A modern, streamlined invoice creation application built with React, TypeScript, and integrated with automation workflows for seamless invoice processing and delivery.

## ✨ Features

### 🎯 Core Functionality
- **Invoice Creation**: Create professional invoices with a clean, intuitive form interface
- **Form Validation**: Comprehensive validation using Zod schema for data integrity
- **Responsive Design**: Modern UI that works seamlessly across desktop and mobile devices
- **Real-time Feedback**: Instant validation feedback and success/error notifications

### 🔧 Technical Features
- **Modern React Stack**: Built with React 18, TypeScript, and Vite for optimal performance
- **UI Components**: Comprehensive UI library with shadcn/ui and Radix UI primitives
- **Form Management**: Advanced form handling with React Hook Form and Zod validation
- **Styling**: Beautiful, responsive design with Tailwind CSS and custom animations
- **State Management**: Efficient state management with TanStack Query
- **Routing**: Client-side routing with React Router DOM

### 🔗 Integrations

#### n8n Workflow Automation
- **Webhook Integration**: Automated invoice processing through n8n workflows
- **Data Processing**: Structured invoice data sent to webhook endpoint for further processing
- **Workflow Triggers**: Invoice submission triggers automated workflows for:
  - Invoice generation
  - Email notifications
  - Customer management
  - Payment tracking

#### Potential Integrations (Based on Architecture)
The application is designed to support integration with:
- **Gmail API**: For automated invoice email delivery
- **Google Drive**: For invoice storage and document management
- **Google Sheets**: For invoice tracking and reporting
- **Payment Gateways**: For payment processing and tracking

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom component library
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui built on Radix UI primitives

### Backend Integration
- **Workflow Engine**: n8n for automation and integration
- **API Communication**: RESTful API calls to webhook endpoints
- **Data Format**: JSON-based data exchange

### Component Structure
```
src/
├── components/
│   ├── InvoiceForm.tsx          # Main invoice creation form
│   └── ui/                      # Reusable UI components
├── pages/
│   ├── Index.tsx                # Main application page
│   └── NotFound.tsx             # 404 error page
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
└── App.tsx                      # Main application component
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd breezy-bill-it
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 🔧 Configuration

### Environment Setup
The application uses a webhook URL for n8n integration. Update the webhook URL in `src/components/InvoiceForm.tsx`:

```typescript
const WEBHOOK_URL = "https://your-n8n-instance.com/webhook/your-webhook-id"
```

### Vite Configuration
The project is configured to run on:
- **Host**: `::` (all interfaces)
- **Port**: `8080`
- **Alias**: `@` points to `./src` directory

## 📋 Usage

### Creating an Invoice

1. **Fill out the invoice form** with the following required information:
   - Invoice Number (unique identifier)
   - Customer Name (minimum 2 characters)
   - Customer Email (valid email format)
   - Invoice Date (date picker)
   - Amount (positive number with decimal support)
   - Description (minimum 10 characters)

2. **Submit the form** - The invoice data will be:
   - Validated in real-time
   - Sent to the configured n8n webhook
   - Processed through automated workflows
   - Confirmation displayed to the user

3. **Form Reset** - After successful submission, the form automatically resets for the next invoice

### Data Flow

```
User Input → Form Validation → n8n Webhook → Automated Workflows → Email/Storage/Processing
```

## 🎨 UI/UX Features

- **Dark Theme**: Modern dark theme with purple accent colors
- **Gradient Backgrounds**: Beautiful gradient backgrounds for visual appeal
- **Responsive Layout**: Adapts to different screen sizes
- **Form Validation**: Real-time validation with clear error messages
- **Loading States**: Loading indicators during form submission
- **Toast Notifications**: Success and error notifications
- **Accessibility**: Built with accessibility best practices

## 🛠️ Technology Stack

### Core Technologies
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful icon library

### Form & Validation
- **React Hook Form** - Performant forms with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation library integration

### Additional Libraries
- **TanStack Query** - Data fetching and state management
- **React Router DOM** - Client-side routing
- **date-fns** - Date utility library
- **class-variance-authority** - CSS class management

## 📈 Future Enhancements

### Planned Features
- **Invoice Templates**: Multiple invoice template options
- **Customer Management**: Customer database and management
- **Payment Integration**: Direct payment processing
- **Invoice History**: View and manage previous invoices
- **Analytics Dashboard**: Invoice analytics and reporting
- **Multi-currency Support**: Support for different currencies
- **PDF Generation**: Client-side PDF invoice generation

### Integration Roadmap
- **Gmail Integration**: Direct email sending
- **Google Drive Integration**: Automatic invoice storage
- **Google Sheets Integration**: Invoice tracking and reporting
- **Stripe/PayPal Integration**: Payment processing
- **Accounting Software**: QuickBooks, Xero integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using modern web technologies for streamlined invoice management**
