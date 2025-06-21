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

#### n8n Backend Workflow Automation
The application includes a complete n8n workflow (`backend/Invoice.json`) that provides end-to-end invoice automation:

**🔄 Workflow Components:**
1. **Webhook Receiver** - Receives invoice data from the frontend
2. **HTML Generator** - Creates styled invoice HTML with customer data
3. **PDF Converter** - Converts HTML to PDF using PDFShift API
4. **Google Drive Upload** - Saves invoice PDF to Google Drive
5. **File Sharing** - Makes the invoice publicly accessible
6. **Email Notification** - Sends invoice link to customer via Gmail
7. **Data Logging** - Records invoice data in Google Sheets using AI Agent

**🔧 Active Integrations:**
- **Gmail API**: Automated invoice email delivery to customers
- **Google Drive API**: Invoice PDF storage and document management
- **Google Sheets API**: Invoice tracking and data logging with AI assistance
- **PDFShift API**: Professional PDF generation from HTML
- **OpenAI API**: AI-powered data processing and Google Sheets integration

**📊 Data Flow:**
```
Frontend → n8n Webhook → HTML Generation → PDF Creation →
Google Drive Storage → Email Delivery → Sheets Logging
```

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom component library
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui built on Radix UI primitives

### Backend Integration
- **Workflow Engine**: n8n for complete invoice automation pipeline
- **API Communication**: RESTful API calls to webhook endpoints
- **Data Format**: JSON-based data exchange with structured invoice data
- **Automation Workflow**: [`backend/Invoice.json`](backend/Invoice.json) contains the complete n8n workflow configuration

### Workflow Architecture
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌──────────────┐
│   Frontend  │───▶│  n8n Webhook │───▶│ HTML Engine │───▶│ PDF Creation │
│   Invoice   │    │   Receiver   │    │   Template  │    │  (PDFShift)  │
│    Form     │    │              │    │             │    │              │
└─────────────┘    └──────────────┘    └─────────────┘    └──────────────┘
                                                                    │
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌──────────────┐
│   Gmail     │◀───│ Google Drive │◀───│   File      │◀───│              │
│  Delivery   │    │   Storage    │    │  Sharing    │    │              │
│             │    │              │    │             │    │              │
└─────────────┘    └──────────────┘    └─────────────┘    └──────────────┘
       │
       ▼
┌─────────────┐    ┌──────────────┐
│   AI Agent  │───▶│ Google Sheets│
│  Processing │    │   Logging    │
│             │    │              │
└─────────────┘    └──────────────┘
```

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
- **n8n instance** (cloud or self-hosted)
- **Google Cloud Platform** account with APIs enabled
- **PDFShift** account for PDF generation
- **OpenAI** account for AI features

### Frontend Setup

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

### Backend Setup (n8n Workflow)

1. **Import Workflow**
   - Access your n8n instance
   - Import [`backend/Invoice.json`](backend/Invoice.json)
   - The workflow will be named "My workflow 5"

2. **Configure Credentials**
   
   **Google Drive OAuth2:**
   ```
   - Create OAuth2 credentials in Google Cloud Console
   - Enable Google Drive API
   - Add credentials to n8n as "Google Drive account"
   ```

   **Gmail OAuth2:**
   ```
   - Enable Gmail API in Google Cloud Console
   - Add OAuth2 credentials to n8n as "Gmail account 2"
   ```

   **Google Sheets OAuth2:**
   ```
   - Enable Google Sheets API in Google Cloud Console
   - Add OAuth2 credentials to n8n as "Google Sheets account"
   ```

   **PDFShift API:**
   ```
   - Sign up at pdfshift.io
   - Get API key and update in HTTP Request node
   - Replace the placeholder API key in the HTTP Request node
   ```

   **OpenAI API:**
   ```
   - Get API key from OpenAI platform
   - Add credentials to n8n as "OpenAi account"
   ```

3. **Configure Google Sheets**
   - Create a new Google Sheets document
   - Update the document ID in the Google Sheets node
   - Replace the placeholder document ID with your own spreadsheet ID
   - Ensure columns match: invoiceNumber, customerName, customerEmail, amount, date, description, timestamp

4. **Update Webhook URL**
   - Copy webhook URL from n8n workflow
   - Update `WEBHOOK_URL` in `src/components/InvoiceForm.tsx`
   - Replace the placeholder webhook path with your own webhook ID

5. **Activate Workflow**
   - Ensure workflow is active in n8n
   - Test webhook endpoint
   - Verify all integrations are working

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

#### Frontend Configuration
Update the webhook URL in `src/components/InvoiceForm.tsx`:

```typescript
const WEBHOOK_URL = "https://your-n8n-instance.com/webhook/your-webhook-id"
```

#### n8n Backend Setup
The backend workflow requires the following integrations and credentials:

**Required API Keys & Credentials:**
1. **PDFShift API** - For PDF generation
   - API Key: Configure in HTTP Request node
   - Used for converting HTML invoices to PDF format

2. **Google Drive OAuth2** - For file storage
   - OAuth2 credentials for Google Drive API
   - Permissions: Drive file creation and sharing

3. **Gmail OAuth2** - For email delivery
   - OAuth2 credentials for Gmail API
   - Permissions: Send emails on behalf of user

4. **Google Sheets OAuth2** - For data logging
   - OAuth2 credentials for Google Sheets API
   - Permissions: Append data to specified spreadsheet

5. **OpenAI API** - For AI-powered data processing
   - API key for GPT-4 model
   - Used by AI Agent for structured data logging

**Workflow Configuration:**
- Import [`backend/Invoice.json`](backend/Invoice.json) into your n8n instance
- Configure all required credentials
- Update the webhook path if needed
- Ensure Google Sheets document ID matches your tracking spreadsheet

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

### Automated Backend Processing

When an invoice is submitted, the n8n workflow automatically:

1. **Receives Invoice Data** via webhook with the following structure:
   ```json
   {
     "invoiceNumber": "INV-001",
     "customerName": "John Doe",
     "customerEmail": "john@example.com",
     "amount": "1500.00",
     "date": "2025-01-15",
     "description": "Web Development Services",
     "timestamp": "2025-01-15T10:30:00Z"
   }
   ```

2. **Generates Professional Invoice** - Creates HTML invoice with:
   - Responsive design optimized for mobile and desktop
   - Professional styling with company branding
   - Dynamic data insertion from webhook payload

3. **Creates PDF Document** - Converts HTML to high-quality PDF using PDFShift API

4. **Stores in Google Drive** - Uploads PDF with filename format: `Invoice {invoiceNumber}`

5. **Enables Public Access** - Configures sharing permissions for customer access

6. **Sends Email Notification** - Automated email containing:
   - Personalized greeting with customer name
   - Service description
   - Direct link to invoice PDF in Google Drive

7. **Logs Data Intelligently** - AI Agent processes and stores invoice data in Google Sheets:
   - Structured data entry with proper formatting
   - Automatic timestamp recording
   - Data validation and error handling

### Complete Data Flow

```
Frontend Form → Validation → n8n Webhook → HTML Template → PDF Generation →
Google Drive Upload → File Sharing → Gmail Delivery → AI Data Processing →
Google Sheets Logging
```

## 🔧 n8n Workflow Features

### Invoice HTML Template
The workflow includes a professional, responsive HTML template with:
- **Modern Design**: Clean, professional styling with company branding
- **Responsive Layout**: Optimized for both desktop and mobile viewing
- **Dynamic Content**: Pulls data directly from webhook payload
- **Professional Styling**: Uses Helvetica Neue font with modern color scheme
- **Print-Ready**: Optimized for PDF conversion with proper formatting

### AI-Powered Data Processing
The workflow leverages OpenAI's GPT-4 model for intelligent data handling:
- **Smart Data Extraction**: AI Agent processes webhook data intelligently
- **Structured Logging**: Automatically formats and validates data for Google Sheets
- **Error Handling**: AI provides validation and error correction
- **Contextual Processing**: Understands invoice context for better data organization

### Automated Email Features
Gmail integration provides professional customer communication:
- **Personalized Messages**: Dynamic greeting using customer name
- **Service Description**: Includes invoice description in email body
- **Direct PDF Access**: Provides shareable Google Drive link
- **Professional Format**: Clean, business-appropriate email template

### File Management
Google Drive integration ensures secure, accessible file storage:
- **Automatic Upload**: PDFs uploaded immediately after generation
- **Smart Naming**: Files named with invoice number for easy identification
- **Public Sharing**: Configures appropriate sharing permissions
- **Permanent Storage**: Files remain accessible for future reference

### Troubleshooting

**Common Issues and Solutions:**

1. **Webhook Not Receiving Data**
   - Verify n8n workflow is active
   - Check webhook URL in frontend matches n8n configuration
   - Ensure n8n instance is accessible from frontend

2. **PDF Generation Failing**
   - Verify PDFShift API key is valid and has credits
   - Check HTML template syntax in the HTML node
   - Ensure PDFShift service is available

3. **Google Drive Upload Issues**
   - Verify Google Drive OAuth2 credentials are properly configured
   - Check API quotas and limits in Google Cloud Console
   - Ensure Google Drive API is enabled

4. **Email Delivery Problems**
   - Verify Gmail OAuth2 credentials and permissions
   - Check Gmail API quotas and limits
   - Ensure sender email is authorized

5. **Google Sheets Logging Errors**
   - Verify spreadsheet ID exists and is accessible
   - Check column headers match expected format
   - Ensure Google Sheets API has proper permissions

6. **AI Agent Issues**
   - Verify OpenAI API key is valid and has credits
   - Check AI Agent configuration and prompts
   - Ensure GPT-4 model is available

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

### Backend Technologies (n8n Workflow)
- **n8n** - Workflow automation platform
- **PDFShift API** - HTML to PDF conversion service
- **Google Drive API** - Cloud storage and file management
- **Gmail API** - Email delivery service
- **Google Sheets API** - Spreadsheet data management
- **OpenAI GPT-4** - AI-powered data processing
- **HTML/CSS** - Invoice template generation
- **JSON** - Data exchange format

### Workflow Node Types
- **Webhook Node** - Receives HTTP POST requests from frontend
- **HTML Node** - Generates dynamic HTML templates
- **HTTP Request Node** - Communicates with external APIs
- **Google Drive Nodes** - File upload and sharing management
- **Gmail Node** - Email composition and delivery
- **AI Agent Node** - Intelligent data processing
- **Google Sheets Tool** - Automated spreadsheet operations
- **OpenAI Chat Model** - Language model integration

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
