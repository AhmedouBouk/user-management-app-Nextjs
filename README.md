# AccountManagementNext

## Quick Start Commands

```bash
# 1. Install dependencies
pnpm install

# 2. Install additional required packages  
pnpm add -D @tailwindcss/postcss autoprefixer

# 3. Run database migration
npx prisma migrate dev --name init

# 4. Seed the database (creates admin user)
npx prisma db seed

# 5. Start development server
pnpm run dev
```

## Project Structure

```
user-management/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Seed admin user
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles + Tailwind
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home/Landing page
│   │   ├── login/
│   │   │   └── page.tsx       # Login page
│   │   ├── signup/
│   │   │   └── page.tsx       # Signup page
│   │   ├── dashboard/
│   │   │   └── page.tsx       # User dashboard
│   │   ├── admin/
│   │   │   ├── page.tsx       # Admin dashboard
│   │   │   └── users/
│   │   │       └── [id]/
│   │   │           └── page.tsx  # Edit user page
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── login/
│   │       │   │   └── route.ts
│   │       │   ├── signup/
│   │       │   │   └── route.ts
│   │       │   ├── logout/
│   │       │   │   └── route.ts
│   │       │   └── me/
│   │       │       └── route.ts
│   │       └── admin/
│   │           └── users/
│   │               ├── route.ts      # GET all, POST create
│   │               └── [id]/
│   │                   └── route.ts  # GET, PUT, DELETE user
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── UserForm.tsx
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   ├── auth.ts            # JWT utilities
│   │   └── utils.ts           # Helper functions
│   ├── hooks/
│   │   └── useAuth.ts         # Auth hook
│   ├── context/
│   │   ├── AuthContext.tsx    # Auth context
│   │   └── ThemeContext.tsx   # Theme context
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   └── middleware.ts          # Route protection
├── .env                       # Environment variables
├── package.json
└── tailwind.config.ts
```

## Environment Variables (.env)

```env
DATABASE_URL=postgresql://postgres:12345678@localhost:5432/user-table
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

## Features

- JWT-based authentication
- User registration & login
- Protected routes (middleware)
- User dashboard with profile info
- Admin panel for user management
- CRUD operations for users
- Role-based access control
- Dark/Light mode toggle
- Responsive design
- Modern UI with Tailwind CSS

## Default Admin Credentials

- Email: admin@example.com
- Password: 1234
