# ISO Management System - Backend

Sistema de gestión integral para implementación y administración de ISO 27001/27002. Una solución completa y genérica diseñada para cualquier empresa u organización que necesite gestionar su Sistema de Gestión de Seguridad de la Información (SGSI).

## Descripción

Este proyecto es un backend construido con NestJS que proporciona una API REST completa para la gestión de un SGSI basado en las normas ISO 27001 e ISO 27002. El sistema incluye gestión de documentos, controles, riesgos, activos y planes de tratamiento.

## Características Principales

### ✅ Módulo de Documentos (Implementado)

Sistema completo de gestión de documentos con:

- **Gestión de Políticas y Procedimientos ISO 27001**
  - 22 plantillas predefinidas exhaustivas (POL-001 a POL-015, PROC-001 a PROC-007)
  - Cobertura completa de todos los dominios de ISO 27001
  - Contenido en Markdown para fácil edición

- **Sistema de Versionamiento**
  - Versionamiento semántico (major.minor)
  - Historial completo de versiones
  - Tracking de cambios y notas de revisión
  - Auditoría completa de modificaciones

- **Flujo de Aprobación**
  - Estados: Borrador → En Revisión → Aprobado → Obsoleto
  - Aprobaciones formales con registros
  - Fechas de revisión automáticas
  - Gestión de ciclo de vida completo

- **Generación de PDFs**
  - Generación profesional con Puppeteer
  - Parsing de Markdown a HTML
  - Diseño profesional con estilos CSS
  - Metadatos en el documento (código, versión, fechas)
  - Badges de estado y tipo

- **Sistema de Plantillas**
  - Creación de documentos desde plantillas
  - Seeder automático en inicio de aplicación
  - Plantillas genéricas adaptables a cualquier organización

- **Vinculación con Controles**
  - Relación de documentos con controles ISO 27001
  - Trazabilidad completa

### 🚧 Módulos Pendientes

- **Controles** (estructura creada, pendiente implementación)
- **Riesgos** (pendiente)
- **Activos** (pendiente)
- **Planes de Tratamiento** (pendiente)

## Plantillas de Documentos Incluidas

### Políticas (15)

1. **POL-001**: Política de Seguridad de la Información
2. **POL-002**: Política de Control de Acceso
3. **POL-003**: Política de Uso Aceptable
4. **POL-004**: Política de Clasificación de la Información
5. **POL-005**: Política de Criptografía
6. **POL-006**: Política de Seguridad Física
7. **POL-007**: Política de Gestión de Recursos Humanos
8. **POL-008**: Política de Gestión de Activos
9. **POL-009**: Política de Desarrollo Seguro
10. **POL-010**: Política de Gestión de Proveedores
11. **POL-011**: Política de Continuidad del Negocio (BCP/DR)
12. **POL-012**: Política de Cumplimiento Legal y Regulatorio
13. **POL-013**: Política de Seguridad en la Nube (Cloud Security)
14. **POL-014**: Política de Gestión de Identidades y Accesos (IAM)
15. **POL-015**: Política de Respuesta a Incidentes de Ciberseguridad

### Procedimientos (7)

1. **PROC-001**: Gestión de Incidentes de Seguridad
2. **PROC-002**: Gestión de Cambios
3. **PROC-003**: Backup y Recuperación
4. **PROC-004**: Gestión de Vulnerabilidades y Parches
5. **PROC-005**: Control de Acceso y Gestión de Usuarios
6. **PROC-006**: Análisis de Riesgos (ISO 27005)
7. **PROC-007**: Monitoreo y Revisión de Seguridad

## Stack Tecnológico

- **Framework**: NestJS 10
- **Lenguaje**: TypeScript
- **ORM**: TypeORM
- **Base de Datos**: SQLite (desarrollo)
- **Autenticación**: JWT + Passport
- **Validación**: class-validator
- **Documentación API**: Swagger/OpenAPI + Scalar
- **PDF Generation**: Puppeteer + Marked
- **Testing**: Jest

## Estructura del Proyecto

```
src/
├── auth/                    # Autenticación y autorización
│   ├── guards/              # Guards de JWT
│   └── strategies/          # Estrategias de Passport
├── users/                   # Gestión de usuarios
├── controls/                # Controles ISO 27002
├── documents/               # ✅ Gestión de documentos
│   ├── entities/
│   │   ├── document.entity.ts           # Entidad principal
│   │   └── document-version.entity.ts   # Historial de versiones
│   ├── dto/                             # DTOs de validación
│   ├── services/
│   │   ├── pdf-generator.service.ts     # Generación de PDFs
│   │   └── templates-seeder.service.ts  # Carga de plantillas
│   ├── templates/
│   │   ├── iso27001-templates.ts        # Plantillas base
│   │   ├── additional-templates.ts      # Plantillas adicionales
│   │   └── comprehensive-templates.ts   # Plantillas exhaustivas
│   ├── documents.service.ts             # Lógica de negocio
│   ├── documents.controller.ts          # API REST
│   └── documents.module.ts
├── risks/                   # (Pendiente)
├── assets/                  # (Pendiente)
└── treatment-plans/         # (Pendiente)
```

## Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd iso-management-backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tu configuración

# Iniciar base de datos (SQLite se crea automáticamente)
```

## Configuración

Crear archivo `.env` con:

```env
# Server
PORT=3002
API_PREFIX=api/v1
NODE_ENV=development

# Database (SQLite)
DB_TYPE=sqlite
DB_DATABASE=./iso-management.db

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRATION=7d

# CORS
CORS_ORIGIN=http://localhost:4200

# API Documentation
API_TITLE=ISO Management System API
API_DESCRIPTION=API for ISO 27001/27002 Management System
API_VERSION=1.0
```

## Ejecución

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

## Endpoints de la API

### Autenticación

```
POST   /api/v1/auth/login           # Iniciar sesión
POST   /api/v1/auth/register        # Registrar usuario
GET    /api/v1/auth/profile         # Obtener perfil
```

### Documentos

```
# CRUD Básico
POST   /api/v1/documents                      # Crear documento
GET    /api/v1/documents                      # Listar todos
GET    /api/v1/documents/templates            # Obtener plantillas
GET    /api/v1/documents/:id                  # Obtener uno
PUT    /api/v1/documents/:id                  # Actualizar
DELETE /api/v1/documents/:id                  # Eliminar

# Flujo de Trabajo
PATCH  /api/v1/documents/:id/status           # Cambiar estado
POST   /api/v1/documents/:id/send-to-review   # Enviar a revisión
POST   /api/v1/documents/:id/approve          # Aprobar documento
POST   /api/v1/documents/:id/obsolete         # Marcar obsoleto

# Versionamiento
GET    /api/v1/documents/:id/versions         # Historial de versiones
GET    /api/v1/documents/:id/versions/:verId  # Versión específica

# Utilidades
POST   /api/v1/documents/from-template/:id    # Crear desde plantilla
GET    /api/v1/documents/:id/pdf              # Generar PDF
```

## Documentación de la API

Una vez iniciada la aplicación, la documentación está disponible en:

- **Swagger UI**: http://localhost:3002/api/docs
- **Scalar API Reference**: http://localhost:3002/api/reference

## Modelo de Datos - Documentos

### Document Entity

```typescript
{
  id: UUID
  code: string              // ej: "POL-001"
  title: string
  description: string
  content: string           // Markdown
  type: DocumentType        // POLICY | PROCEDURE
  category: DocumentCategory
  status: DocumentStatus    // DRAFT | IN_REVIEW | APPROVED | OBSOLETE
  version: string           // "1.0", "2.1", etc.
  majorVersion: number
  minorVersion: number
  ownerId: string
  approverId?: string
  approvedAt?: Date
  reviewDate?: Date         // Fecha próxima revisión
  reviewPeriodMonths: number
  relatedControlIds: string[]
  tags: string[]
  isTemplate: boolean
  changeNotes?: string
  createdAt: Date
  updatedAt: Date
}
```

### DocumentVersion Entity

```typescript
{
  id: UUID
  documentId: UUID
  version: string
  majorVersion: number
  minorVersion: number
  content: string
  changeNotes: string
  createdById?: string
  createdByName?: string
  createdAt: Date
}
```

## Flujo de Trabajo de Documentos

```
┌──────────┐
│  DRAFT   │ ◄── Estado inicial
└────┬─────┘
     │ sendToReview()
     ▼
┌──────────┐
│IN_REVIEW │
└────┬─────┘
     │ approve()
     ▼
┌──────────┐
│ APPROVED │ ◄── Incrementa versión
└────┬─────┘
     │ makeObsolete()
     ▼
┌──────────┐
│ OBSOLETE │
└──────────┘
```

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Características de Seguridad

- ✅ Autenticación JWT
- ✅ Guards de protección en todos los endpoints
- ✅ Validación de DTOs con class-validator
- ✅ Passwords hasheados con bcrypt
- ✅ CORS configurado
- ✅ Helmet para headers de seguridad
- ✅ Rate limiting (pendiente)

## Roadmap

### Fase 1: Documentos ✅ (Completada)
- [x] Entidades y DTOs
- [x] CRUD completo
- [x] Sistema de versionamiento
- [x] Flujo de aprobación
- [x] Generación de PDFs
- [x] 22 plantillas predefinidas
- [x] Sistema de seeder

### Fase 2: Controles (Próxima)
- [ ] CRUD de controles ISO 27001
- [ ] Anexo A completo
- [ ] Estado de implementación
- [ ] Evidencias por control
- [ ] Vinculación con documentos

### Fase 3: Riesgos
- [ ] Análisis de riesgos
- [ ] Matriz de probabilidad/impacto
- [ ] Registro de riesgos
- [ ] Vinculación con activos y controles

### Fase 4: Activos
- [ ] Inventario de activos
- [ ] Clasificación de activos
- [ ] Propietarios de activos
- [ ] Valoración

### Fase 5: Planes de Tratamiento
- [ ] Planes de tratamiento de riesgos
- [ ] Seguimiento de acciones
- [ ] Métricas y reportes

### Fase 6: Frontend Angular
- [ ] Dashboard
- [ ] Módulo de documentos
- [ ] Módulo de controles
- [ ] Módulo de riesgos
- [ ] Reportes y gráficos

## Contribución

Este es un proyecto genérico diseñado para ser lo más completo posible y adaptable a cualquier organización. Las contribuciones son bienvenidas.

## Licencia

[MIT licensed](LICENSE)

## Autor

Desarrollado para la gestión integral de ISO 27001/27002

## Soporte

Para preguntas o soporte, crear un issue en el repositorio.
