# Opera Prime Salon — Test Credentials

## Admin Account
- Email: `admin@operaprime.com`
- Password: `OperaPrime@2026`
- Role: `admin`
- Login endpoint: `POST /api/auth/login`
- Admin login page: `/admin`
- Admin dashboard: `/admin/dashboard`

## Auth
- Token type: JWT (HS256, 12h expiry)
- Storage: `localStorage` under key `op_token`
- Header: `Authorization: Bearer <token>`

## API endpoints
- Public: `GET /api/services`, `GET /api/offers`, `POST /api/bookings`
- Auth: `POST /api/auth/login`, `GET /api/auth/me`
- Admin: `GET|PATCH|DELETE /api/admin/bookings[/id]`, `GET|POST|PATCH|DELETE /api/admin/services[/id]`, `GET|POST|PATCH|DELETE /api/admin/offers[/id]`
