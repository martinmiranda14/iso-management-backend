import {
  DocumentType,
  DocumentCategory,
} from '../entities/document.entity';
import { DocumentTemplate } from './iso27001-templates';

export const ADDITIONAL_TEMPLATES: DocumentTemplate[] = [
  {
    code: 'POL-005',
    title: 'Política de Criptografía',
    description:
      'Establece los requisitos para el uso de controles criptográficos',
    type: DocumentType.POLICY,
    category: DocumentCategory.CRYPTOGRAPHY,
    tags: ['criptografía', 'cifrado', 'seguridad'],
    content: `# Política de Criptografía

## 1. Propósito
Establecer los estándares para el uso de criptografía en la protección de información sensible.

## 2. Alcance
Aplica a todos los datos sensibles en tránsito y en reposo, sistemas de información y comunicaciones.

## 3. Requisitos de Cifrado

### 3.1 Datos en Tránsito
- **TLS 1.2 o superior** para todas las comunicaciones web
- **VPN con cifrado fuerte** (AES-256) para accesos remotos
- **SSH con claves RSA 2048 bits mínimo**
- Prohibido el uso de protocolos sin cifrado (HTTP, FTP, Telnet)

### 3.2 Datos en Reposo
- **Cifrado de disco completo** en laptops y dispositivos móviles
- **Cifrado a nivel de archivo** para información confidencial
- **Cifrado de base de datos** para datos personales sensibles
- Algoritmos aprobados: AES-256, RSA-2048 mínimo

### 3.3 Datos de Respaldo
- Todos los backups deben estar cifrados
- Claves de cifrado almacenadas separadamente
- Verificación periódica de recuperación

## 4. Gestión de Claves Criptográficas

### 4.1 Generación
- Uso de generadores criptográficamente seguros
- Longitud mínima según algoritmo
- No reutilización de claves

### 4.2 Almacenamiento
- Hardware Security Module (HSM) para claves críticas
- Key Management System (KMS) para claves de aplicación
- Nunca almacenar claves en código fuente

### 4.3 Rotación
- Claves de cifrado: cada 12 meses
- Claves de firma: cada 24 meses
- Rotación inmediata si se sospecha compromiso

### 4.4 Destrucción
- Eliminación segura al finalizar vida útil
- Registro de destrucción
- Verificación de eliminación completa

## 5. Certificados Digitales
- Uso de autoridades certificadoras confiables
- Renovación antes del vencimiento
- Revocación inmediata en caso de compromiso
- Monitoreo de vencimientos

## 6. Firma Digital
- Requerida para:
  - Aprobación de documentos críticos
  - Transacciones financieras
  - Contratos digitales
- Algoritmos: RSA-2048 o superior, ECDSA P-256

## 7. Algoritmos Prohibidos
- DES, 3DES
- MD5, SHA-1
- RC4
- RSA menor a 2048 bits

## 8. Cumplimiento
- Auditoría anual de controles criptográficos
- Actualización según evolución de estándares
- Capacitación a equipos técnicos`,
  },
  {
    code: 'POL-006',
    title: 'Política de Seguridad Física',
    description: 'Define los controles de seguridad física para proteger activos',
    type: DocumentType.POLICY,
    category: DocumentCategory.PHYSICAL_SECURITY,
    tags: ['seguridad física', 'instalaciones', 'protección'],
    content: `# Política de Seguridad Física

## 1. Propósito
Proteger las instalaciones, equipos y personal de amenazas físicas.

## 2. Alcance
Aplica a todas las instalaciones, centros de datos y ubicaciones donde se procesa información.

## 3. Control de Acceso Físico

### 3.1 Perímetro de Seguridad
- Vallado o barreras físicas en perímetro
- Iluminación adecuada en áreas externas
- Señalización de áreas restringidas
- Cámaras de vigilancia en perímetro

### 3.2 Puntos de Entrada
- Control de acceso en todas las entradas
- Recepcionista o guardia de seguridad
- Registro de visitantes
- Sistema de tarjetas de acceso

### 3.3 Áreas Seguras
- **Centro de Datos**: Acceso biométrico + tarjeta
- **Sala de Servidores**: Registro de accesos
- **Sala de Comunicaciones**: Acceso restringido
- **Archivo de Documentos**: Control de entrada/salida

### 3.4 Visitantes
- Registro obligatorio en recepción
- Credencial visible en todo momento
- Acompañamiento permanente
- Devolución de credencial al salir

## 4. Protección de Equipos

### 4.1 Ubicación
- Alejados de ventanas
- Protección contra desastres naturales
- Área libre de tuberías de agua
- Separación de áreas públicas

### 4.2 Seguridad de Equipos
- Anclaje físico de equipos críticos
- Cable de seguridad para laptops
- Bloqueo de puertos USB no autorizados
- Etiquetado de activos

### 4.3 Equipos en Desuso
- Destrucción de medios de almacenamiento
- Eliminación segura de datos
- Registro de disposición
- Certificado de destrucción

## 5. Protección Ambiental

### 5.1 Suministro Eléctrico
- UPS para equipos críticos
- Generador de respaldo
- Protección contra sobretensión
- Monitoreo de energía

### 5.2 Control Ambiental
- Aire acondicionado redundante
- Control de temperatura: 18-27°C
- Control de humedad: 40-60%
- Monitoreo continuo

### 5.3 Protección contra Incendios
- Detectores de humo
- Sistema de supresión de incendios
- Extintores apropiados
- Salidas de emergencia señalizadas

### 5.4 Protección contra Agua
- Detección de fugas
- Drenaje adecuado
- Suelo elevado en centros de datos

## 6. Escritorio Limpio y Pantalla Limpia
- No dejar documentos confidenciales en escritorios
- Bloquear estaciones de trabajo al ausentarse
- Destruir borradores y copias no necesarias
- Bloqueo automático de pantalla tras 5 minutos

## 7. Seguridad de Medios

### 7.1 Almacenamiento
- Armarios con llave para medios confidenciales
- Inventario de medios
- Etiquetado de clasificación

### 7.2 Transporte
- Mensajería autorizada
- Cifrado de datos
- Embalaje seguro
- Registro de envíos

## 8. Monitoreo
- CCTV en áreas críticas
- Retención de grabaciones: 90 días
- Revisión periódica
- Alertas de eventos de seguridad

## 9. Respuesta a Incidentes Físicos
- Procedimiento de evacuación
- Punto de reunión definido
- Contactos de emergencia
- Simulacros trimestrales`,
  },
  {
    code: 'POL-007',
    title: 'Política de Gestión de Recursos Humanos',
    description:
      'Establece controles de seguridad relacionados con el personal',
    type: DocumentType.POLICY,
    category: DocumentCategory.HUMAN_RESOURCES,
    tags: ['recursos humanos', 'personal', 'concienciación'],
    content: `# Política de Gestión de Recursos Humanos - Seguridad de la Información

## 1. Propósito
Asegurar que empleados y contratistas comprendan sus responsabilidades de seguridad.

## 2. Alcance
Aplica a todo el personal, antes, durante y después de su relación laboral.

## 3. Antes del Empleo

### 3.1 Verificación de Antecedentes
- Verificación de referencias
- Validación de educación y experiencia
- Verificación de antecedentes penales (donde sea legal)
- Mayor rigurosidad para puestos sensibles

### 3.2 Términos y Condiciones
- Cláusula de confidencialidad
- Acuerdo de uso aceptable
- Código de ética
- Responsabilidades de seguridad

## 4. Durante el Empleo

### 4.1 Responsabilidades de la Dirección
- Comunicar responsabilidades de seguridad
- Proporcionar recursos adecuados
- Supervisión apropiada
- Proceso disciplinario definido

### 4.2 Capacitación y Concienciación

#### Inducción
- Sesión de seguridad para nuevos empleados
- Entrega de políticas y procedimientos
- Firma de acuerdos de confidencialidad
- Configuración de accesos

#### Capacitación Continua
- Capacitación anual obligatoria
- Temas:
  - Seguridad de la información
  - Protección de datos personales
  - Ingeniería social y phishing
  - Manejo de incidentes
  - Normativa aplicable

#### Campañas de Concienciación
- Comunicados mensuales
- Simulacros de phishing
- Carteles y recordatorios
- Reconocimiento de buenas prácticas

### 4.3 Evaluación
- Evaluación de desempeño incluye seguridad
- Cumplimiento de políticas
- Incidentes de seguridad
- Capacitaciones completadas

## 5. Cambio o Finalización del Empleo

### 5.1 Cambio de Puesto
- Revisión de privilegios de acceso
- Actualización de responsabilidades
- Capacitación adicional si es necesario
- Notificación a TI

### 5.2 Proceso de Salida
#### Desactivación de Accesos
- Inmediata en terminaciones involuntarias
- Último día en terminaciones voluntarias
- Desactivación de:
  - Cuentas de usuario
  - Acceso físico
  - Acceso remoto
  - Correo electrónico (reenvío si necesario)

#### Devolución de Activos
- Laptop, teléfono, tablet
- Tarjeta de acceso
- Llaves
- Documentación
- Firma de acta de entrega

#### Conocimiento de Salida
- Recordatorio de obligaciones de confidencialidad
- Prohibición de uso de información confidencial
- Devolución de información
- Entrevista de salida

## 6. Trabajo Remoto
- Aprobación previa requerida
- Equipos corporativos
- VPN obligatoria
- Seguridad en el hogar
- Disponibilidad durante horario laboral

## 7. Contratistas y Terceros
- Acuerdo de confidencialidad
- Cláusulas de seguridad en contratos
- Acceso temporal limitado
- Supervisión adecuada
- Revisión al finalizar contrato

## 8. Proceso Disciplinario
- Advertencia verbal (primera vez)
- Advertencia escrita (reincidencia)
- Suspensión sin goce de sueldo
- Terminación de empleo (casos graves)

## 9. Reporte de Violaciones
- Canal de denuncia anónimo
- Protección contra represalias
- Investigación confidencial
- Acción correctiva apropiada`,
  },
  {
    code: 'POL-008',
    title: 'Política de Gestión de Activos',
    description: 'Define cómo identificar, clasificar y proteger activos',
    type: DocumentType.POLICY,
    category: DocumentCategory.ASSET_MANAGEMENT,
    tags: ['activos', 'inventario', 'gestión'],
    content: `# Política de Gestión de Activos

## 1. Propósito
Asegurar que los activos de información sean identificados, clasificados y protegidos adecuadamente.

## 2. Alcance
Aplica a todos los activos de información, incluyendo hardware, software, datos y documentación.

## 3. Inventario de Activos

### 3.1 Registro
- Inventario completo de activos
- Actualización continua
- Propietario asignado
- Clasificación definida
- Ubicación registrada

### 3.2 Información del Activo
- Nombre y descripción
- Tipo de activo
- Número de serie / identificador
- Propietario y custodio
- Clasificación
- Ubicación física
- Fecha de adquisición
- Fecha de retiro planificada

### 3.3 Tipos de Activos
- **Hardware**: Servidores, laptops, dispositivos móviles
- **Software**: Aplicaciones, sistemas operativos, licencias
- **Datos**: Bases de datos, archivos, backups
- **Servicios**: Servicios cloud, telecomunicaciones
- **Documentación**: Políticas, procedimientos, contratos
- **Personas**: Conocimiento especializado

## 4. Propiedad de Activos

### 4.1 Propietario del Activo
Responsabilidades:
- Clasificar el activo
- Definir controles de acceso
- Autorizar uso del activo
- Revisar accesos periódicamente
- Decidir sobre retiro

### 4.2 Custodio del Activo
Responsabilidades:
- Protección física del activo
- Aplicar controles definidos
- Mantenimiento adecuado
- Reportar incidentes
- Devolución al finalizar uso

### 4.3 Usuario del Activo
Responsabilidades:
- Uso apropiado
- Cumplir políticas
- Proteger el activo
- Reportar problemas

## 5. Uso Aceptable de Activos

### 5.1 Uso Permitido
- Actividades laborales
- Capacitación relacionada
- Uso personal mínimo (según política)

### 5.2 Uso Prohibido
- Actividades ilegales
- Uso comercial personal
- Almacenar información no autorizada
- Modificar configuraciones sin autorización
- Instalar software no aprobado

## 6. Clasificación de Información
(Referirse a Política de Clasificación de la Información POL-004)

## 7. Etiquetado
- Etiquetas físicas en hardware
- Clasificación en documentos
- Metadata en archivos digitales
- Código de barras o RFID

## 8. Manejo de Activos

### 8.1 Procedimientos de Manejo
- Transporte seguro
- Almacenamiento apropiado
- Protección durante uso
- Limpieza de medios antes de reutilizar

### 8.2 Activos Fuera de las Instalaciones
- Autorización previa
- Registro de salida
- Cifrado obligatorio
- Protección física

### 8.3 Activos Móviles
- Cifrado de disco completo
- Contraseña fuerte + biometría
- Software antimalware
- Borrado remoto habilitado
- Backup periódico

## 9. Retiro y Disposición

### 9.1 Proceso de Retiro
- Aprobación del propietario
- Backup de datos necesarios
- Eliminación segura de datos
- Actualización de inventario
- Disposición física

### 9.2 Eliminación de Datos
- **Sobrescritura**: Mínimo 3 pasadas para HDD
- **Destrucción física**: Discos con info crítica
- **Degaussing**: Medios magnéticos
- **Certificación**: Documento de destrucción

### 9.3 Disposición de Hardware
- Donación (después de limpieza)
- Reciclaje autorizado
- Destrucción física
- Registro de disposición

## 10. Auditoría de Activos
- Verificación física: semestral
- Revisión de inventario: trimestral
- Conciliación de registros
- Investigación de discrepancias

## 11. Retorno de Activos
- Devolución al finalizar proyecto
- Cambio de puesto
- Terminación de empleo
- Verificación de estado
- Actualización de registros`,
  },
  {
    code: 'POL-009',
    title: 'Política de Desarrollo Seguro',
    description:
      'Establece requisitos de seguridad en el ciclo de vida de desarrollo',
    type: DocumentType.POLICY,
    category: DocumentCategory.OPERATIONS,
    tags: ['desarrollo', 'seguridad', 'sdlc'],
    content: `# Política de Desarrollo Seguro

## 1. Propósito
Integrar seguridad en todas las fases del ciclo de vida de desarrollo de software.

## 2. Alcance
Aplica a todo desarrollo de software, incluyendo aplicaciones internas, externas y modificaciones.

## 3. Principios de Desarrollo Seguro

### 3.1 Security by Design
- Seguridad desde la fase de diseño
- Análisis de riesgos temprano
- Modelado de amenazas
- Principio de menor privilegio

### 3.2 Defense in Depth
- Múltiples capas de seguridad
- No confiar en un solo control
- Validación en cliente y servidor

### 3.3 Fail Secure
- Modo seguro por defecto en errores
- No revelar información sensible en errores
- Logging de fallos

## 4. Requisitos por Fase

### 4.1 Análisis de Requisitos
- Identificar requisitos de seguridad
- Requisitos de cumplimiento
- Privacidad de datos
- Clasificación de información

### 4.2 Diseño
- Revisión de arquitectura de seguridad
- Modelado de amenazas (STRIDE)
- Análisis de superficie de ataque
- Selección de frameworks seguros

### 4.3 Desarrollo

#### Estándares de Codificación
- Guías de codificación segura (OWASP)
- Linters y análisis estático
- Revisión de código peer-to-peer
- Comentarios apropiados

#### Gestión de Secretos
- No hardcodear credenciales
- Uso de gestores de secretos
- Variables de entorno
- Rotación de claves

#### Control de Versiones
- Git con commits firmados
- Branches protegidos
- Revisión de pull requests
- No subir secretos

#### Dependencias
- Inventario de componentes de terceros
- Verificación de licencias
- Escaneo de vulnerabilidades
- Actualización periódica

### 4.4 Pruebas

#### Pruebas de Seguridad Obligatorias
- **Análisis estático (SAST)**: Automático en CI/CD
- **Análisis dinámico (DAST)**: Antes de producción
- **Análisis de composición (SCA)**: Dependencias
- **Pruebas de penetración**: Anual o cambios mayores

#### Cobertura de Pruebas
- Autenticación y autorización
- Validación de entrada
- Manejo de sesiones
- Criptografía
- Logging y auditoría

### 4.5 Implementación
- Despliegue automatizado
- Configuración segura
- Validación en staging
- Plan de rollback
- Monitoreo post-despliegue

## 5. Controles de Seguridad Requeridos

### 5.1 Autenticación
- Autenticación multifactor para funciones críticas
- Políticas de contraseñas fuertes
- Bloqueo de cuenta tras intentos fallidos
- Sesiones con timeout

### 5.2 Autorización
- Control de acceso basado en roles (RBAC)
- Verificación en cada solicitud
- Principio de menor privilegio
- Segregación de funciones

### 5.3 Validación de Entrada
- Lista blanca de entrada permitida
- Sanitización de datos
- Validación server-side obligatoria
- Protección contra:
  - SQL Injection
  - XSS
  - CSRF
  - Command Injection
  - Path Traversal

### 5.4 Gestión de Sesiones
- IDs de sesión aleatorios
- Sesiones con expiración
- Invalidación en logout
- Flags seguros en cookies (Secure, HttpOnly, SameSite)

### 5.5 Manejo de Errores
- Mensajes genéricos al usuario
- Logging detallado server-side
- No revelar stack traces
- Páginas de error personalizadas

### 5.6 Logging y Monitoreo
- Registro de eventos de seguridad
- Logs centralizados
- Protección de integridad de logs
- Alertas de eventos críticos

### 5.7 Criptografía
- TLS 1.2+ para datos en tránsito
- Cifrado de datos sensibles en reposo
- Algoritmos aprobados
- Gestión segura de claves

## 6. Entornos de Desarrollo

### 6.1 Separación de Entornos
- Desarrollo
- QA/Testing
- Staging
- Producción

### 6.2 Datos de Prueba
- No usar datos de producción
- Anonimización/enmascaramiento si es necesario
- Datos sintéticos
- Aprobación para usar datos reales

### 6.3 Acceso a Producción
- Acceso restringido
- Autenticación fuerte
- Logging de accesos
- Cambios a través de proceso formal

## 7. Gestión de Vulnerabilidades

### 7.1 Identificación
- Escaneo automático continuo
- Programa de bug bounty (opcional)
- Reportes de terceros

### 7.2 Priorización
- Crítico: 1 día
- Alto: 7 días
- Medio: 30 días
- Bajo: 90 días

### 7.3 Remediación
- Parches priorizados
- Validación de corrección
- Despliegue expedito
- Comunicación a stakeholders

## 8. Terceros y Open Source
- Evaluación de seguridad antes de uso
- Revisión de licencias
- Escaneo de vulnerabilidades conocidas
- Plan de actualización

## 9. DevSecOps
- Seguridad automatizada en CI/CD
- Shift-left security
- Pipelines seguros
- Infraestructura como código
- Escaneo de contenedores

## 10. Capacitación
- Capacitación anual en desarrollo seguro
- Certificaciones (ej. CSSLP)
- Conocimiento de OWASP Top 10
- Entrenamientos específicos por rol`,
  },
  {
    code: 'POL-010',
    title: 'Política de Gestión de Proveedores',
    description: 'Define requisitos de seguridad para proveedores y terceros',
    type: DocumentType.POLICY,
    category: DocumentCategory.SUPPLIER_RELATIONS,
    tags: ['proveedores', 'terceros', 'contratos'],
    content: `# Política de Gestión de Proveedores y Terceros

## 1. Propósito
Asegurar que los riesgos de seguridad asociados con proveedores y terceros sean gestionados apropiadamente.

## 2. Alcance
Aplica a todos los proveedores y terceros que tienen acceso a información o sistemas de la organización.

## 3. Clasificación de Proveedores

### 3.1 Categorías por Riesgo

#### Críticos
- Acceso a datos confidenciales
- Hosting de aplicaciones críticas
- Servicios esenciales para el negocio
- Procesamiento de datos personales

#### Importantes
- Acceso a datos internos
- Servicios de soporte TI
- Desarrollo de software

#### Estándar
- Servicios generales
- Sin acceso a información confidencial
- Bajo impacto en operaciones

## 4. Proceso de Selección

### 4.1 Evaluación Inicial
- Solicitud de información de seguridad
- Revisión de certificaciones (ISO 27001, SOC 2)
- Referencias de otros clientes
- Estabilidad financiera
- Experiencia en el sector

### 4.2 Due Diligence
Para proveedores críticos:
- Cuestionario de seguridad detallado
- Revisión de políticas de seguridad
- Auditoría de seguridad (si procede)
- Visita a instalaciones
- Prueba de concepto

### 4.3 Aprobación
- Evaluación de riesgos
- Aprobación por comité de seguridad
- Registro en inventario de proveedores
- Clasificación de riesgo asignada

## 5. Requisitos Contractuales

### 5.1 Cláusulas de Seguridad Obligatorias

#### Confidencialidad
- Acuerdo de no divulgación (NDA)
- Protección de información confidencial
- Restricción de uso de información
- Obligaciones post-contrato

#### Protección de Datos
- Cumplimiento de regulación de datos personales
- Rol de procesador de datos
- Derechos de los titulares
- Notificación de brechas (72 horas)
- Transferencias internacionales

#### Seguridad de la Información
- Implementar controles de seguridad apropiados
- Cumplir políticas de seguridad de la organización
- Cifrado de datos sensibles
- Gestión de accesos
- Segregación de datos de clientes

#### Derecho de Auditoría
- Auditorías periódicas
- Acceso a registros relevantes
- Reportes de cumplimiento
- Resultados de pruebas de penetración

#### Subcontratación
- Aprobación previa para subcontratar
- Mismas obligaciones a subcontratistas
- Responsabilidad del proveedor principal

#### Notificación de Incidentes
- Notificación inmediata de incidentes
- Cooperación en investigaciones
- Medidas correctivas
- Reportes post-incidente

#### Personal
- Verificación de antecedentes
- Capacitación en seguridad
- Acuerdos de confidencialidad
- Lista de personal autorizado

#### Retorno o Destrucción de Datos
- Proceso al finalizar contrato
- Certificación de destrucción
- Plazo definido
- Verificación de eliminación

### 5.2 Niveles de Servicio (SLA)
- Disponibilidad requerida
- Tiempo de respuesta
- Tiempo de resolución
- Penalizaciones por incumplimiento

### 5.3 Seguros
- Seguro de responsabilidad civil
- Seguro de ciberseguridad (para proveedores críticos)
- Cobertura mínima especificada

### 5.4 Terminación
- Causales de terminación
- Período de transición
- Retorno de activos
- Continuidad del servicio

## 6. Gestión de Accesos

### 6.1 Principio de Menor Privilegio
- Solo acceso necesario
- Limitado en tiempo
- Limitado en alcance
- Aprobación formal

### 6.2 Credenciales
- Cuentas individuales (no compartidas)
- Contraseñas fuertes
- MFA obligatoria
- Desactivación al finalizar contrato

### 6.3 Acceso Remoto
- VPN corporativa
- Dispositivos autorizados
- Logging de conexiones
- Monitoreo de actividad

### 6.4 Acceso Físico
- Acompañamiento permanente
- Credencial de visitante
- Registro de accesos
- Restricción de áreas sensibles

## 7. Monitoreo y Revisión

### 7.1 Monitoreo Continuo
- Revisión de actividad de accesos
- Alertas de comportamiento anómalo
- Cumplimiento de SLA
- Incidentes de seguridad

### 7.2 Revisiones Periódicas
- **Proveedores críticos**: Trimestral
- **Proveedores importantes**: Semestral
- **Proveedores estándar**: Anual

Aspectos a revisar:
- Cumplimiento contractual
- Indicadores de desempeño
- Incidentes ocurridos
- Cambios en el proveedor
- Certificaciones vigentes

### 7.3 Auditorías
- Según clasificación de riesgo
- Revisión de controles de seguridad
- Pruebas de cumplimiento
- Reporte de hallazgos
- Plan de acción correctiva

## 8. Gestión de Cambios del Proveedor

### 8.1 Notificación Obligatoria
- Cambios en ubicación de datos
- Cambios en personal clave
- Adquisiciones o fusiones
- Nuevas subcontrataciones
- Incidentes de seguridad significativos

### 8.2 Evaluación de Impacto
- Análisis de cambios propuestos
- Evaluación de riesgos
- Aprobación o rechazo
- Actualización de documentación

## 9. Gestión de Incidentes con Proveedores

### 9.1 Responsabilidades
- Notificación inmediata
- Contención del incidente
- Investigación conjunta
- Acciones correctivas
- Reporte de lecciones aprendidas

### 9.2 Escalamiento
- Procedimiento definido
- Contactos de escalamiento
- Tiempos de respuesta
- Involucramiento de alta dirección

## 10. Finalización del Contrato

### 10.1 Proceso de Offboarding
- Desactivación de accesos
- Retorno de activos
- Destrucción de datos
- Certificaciones requeridas
- Lecciones aprendidas

### 10.2 Plan de Continuidad
- Identificación temprana
- Nuevo proveedor seleccionado
- Período de transición
- Transferencia de conocimiento
- Sin interrupción de servicio

## 11. Proveedores Cloud

### 11.1 Requisitos Adicionales
- Certificaciones cloud (ej. CSA STAR)
- Ubicación de datos especificada
- Cifrado end-to-end
- Portabilidad de datos
- APIs de seguridad

### 11.2 Modelo de Responsabilidad Compartida
- Claridad en responsabilidades
- Configuración segura
- Gestión de identidades
- Monitoreo y logging

## 12. Inventario de Proveedores
- Lista actualizada
- Clasificación de riesgo
- Servicios provistos
- Datos accesibles
- Contratos y vencimientos
- Persona responsable
- Estado de revisiones`,
  },
  {
    code: 'PROC-004',
    title: 'Procedimiento de Gestión de Vulnerabilidades',
    description:
      'Define el proceso para identificar y remediar vulnerabilidades',
    type: DocumentType.PROCEDURE,
    category: DocumentCategory.OPERATIONS,
    tags: ['vulnerabilidades', 'parches', 'seguridad'],
    content: `# Procedimiento de Gestión de Vulnerabilidades

## 1. Objetivo
Identificar, evaluar y remediar vulnerabilidades de seguridad de manera oportuna.

## 2. Alcance
Aplica a todos los sistemas, aplicaciones y dispositivos de la organización.

## 3. Roles y Responsabilidades

### 3.1 Equipo de Seguridad
- Escaneo de vulnerabilidades
- Priorización de remediación
- Seguimiento de correcciones
- Reporte a gerencia

### 3.2 Administradores de Sistemas
- Aplicar parches y actualizaciones
- Implementar mitigaciones temporales
- Validar correcciones
- Documentar acciones

### 3.3 Desarrolladores
- Corregir vulnerabilidades en aplicaciones
- Pruebas de seguridad
- Actualizar dependencias

## 4. Identificación de Vulnerabilidades

### 4.1 Escaneo Automatizado

#### Frecuencia
- **Sistemas críticos**: Semanal
- **Sistemas importantes**: Quincenal
- **Sistemas estándar**: Mensual

#### Herramientas
- Escáner de vulnerabilidades de red (ej. Nessus, Qualys)
- Escáner de aplicaciones web (ej. Burp Suite, OWASP ZAP)
- Análisis de composición de software (ej. Snyk, WhiteSource)

#### Alcance
- Direcciones IP internas
- Aplicaciones web internas y externas
- APIs expuestas
- Dispositivos de red
- Endpoints

### 4.2 Otras Fuentes
- Reportes de usuarios
- Bug bounty programs
- Avisos de proveedores
- Boletines de seguridad (CERT, CVE)
- Pruebas de penetración
- Auditorías de seguridad

## 5. Evaluación y Priorización

### 5.1 Clasificación de Severidad

#### Crítica (P1)
- CVSS 9.0 - 10.0
- Explotación activa en internet
- Sin autenticación requerida
- Impacto en sistemas críticos
- **SLA: 24 horas**

#### Alta (P2)
- CVSS 7.0 - 8.9
- Fácilmente explotable
- Impacto significativo
- Exposición a internet
- **SLA: 7 días**

#### Media (P3)
- CVSS 4.0 - 6.9
- Requiere condiciones específicas
- Impacto moderado
- Sistemas internos
- **SLA: 30 días**

#### Baja (P4)
- CVSS 0.1 - 3.9
- Difícil de explotar
- Impacto mínimo
- **SLA: 90 días**

### 5.2 Factores de Priorización
- Severidad CVSS
- Criticidad del activo
- Exposición (internet vs interno)
- Existencia de exploit público
- Explotación activa
- Facilidad de remediación
- Requisitos de cumplimiento

### 5.3 Análisis de Falsos Positivos
- Verificación manual
- Validación de contexto
- Marcado en sistema
- Documentación de justificación

## 6. Remediación

### 6.1 Proceso de Remediación

#### 1. Planificación
- Asignar responsable
- Definir ventana de mantenimiento
- Preparar plan de rollback
- Notificar a stakeholders
- Coordinar con equipos

#### 2. Pruebas
- Validar parche en laboratorio
- Verificar compatibilidad
- Probar funcionalidad
- Documentar procedimiento

#### 3. Implementación
- Backup completo
- Aplicar corrección
- Validar aplicación exitosa
- Verificar funcionalidad
- Monitorear sistema

#### 4. Verificación
- Re-escaneo de vulnerabilidad
- Validar corrección
- Cerrar ticket
- Actualizar inventario
- Documentar lecciones aprendidas

### 6.2 Métodos de Remediación

#### Parches
- Método preferido
- Seguir proceso de gestión de cambios
- Aplicar en staging primero
- Programar ventana de mantenimiento

#### Actualización de Versión
- Para múltiples vulnerabilidades
- Mayor testing requerido
- Plan de rollback detallado

#### Mitigaciones Temporales
Cuando parche no disponible:
- Controles compensatorios
- Reglas de firewall
- WAF rules
- Deshabilitar funcionalidad
- Restricción de acceso

#### Aceptación de Riesgo
Última opción, requiere:
- Justificación documentada
- Aprobación de alta dirección
- Controles compensatorios
- Revisión periódica
- Plan de remediación futura

### 6.3 Excepciones
- Solicitud formal
- Justificación de negocio
- Análisis de riesgo
- Controles alternativos
- Aprobación por CISO
- Revisión trimestral
- Fecha de expiración

## 7. Gestión de Parches

### 7.1 Clasificación de Parches

#### Críticos de Seguridad
- Vulnerabilidades críticas
- Explotación activa
- **Testing**: Mínimo (24-48 horas)
- **Despliegue**: Inmediato

#### Importantes de Seguridad
- Vulnerabilidades altas
- **Testing**: 3-5 días
- **Despliegue**: Dentro de 7 días

#### Rutinarios
- Parches mensuales
- **Testing**: 1-2 semanas
- **Despliegue**: Ventana mensual

### 7.2 Proceso de Aplicación de Parches

#### Fase 1: Laboratorio
- Aplicar en ambiente de prueba
- Validar compatibilidad
- Probar funcionalidad crítica
- Documentar proceso

#### Fase 2: Piloto
- Grupo pequeño de sistemas
- Monitoreo intensivo
- Validación de usuarios
- 24-48 horas de observación

#### Fase 3: Producción
- Despliegue por fases
- Sistemas menos críticos primero
- Ventana de mantenimiento
- Monitoreo continuo

### 7.3 Automatización
- Parches automáticos para endpoints
- Exclusiones para servidores críticos
- Validación post-aplicación
- Alertas de fallos
- Reporte de cumplimiento

## 8. Monitoreo y Reporte

### 8.1 Métricas
- Número de vulnerabilidades por severidad
- Tiempo promedio de remediación
- % de cumplimiento de SLA
- Tendencia de vulnerabilidades
- Top vulnerabilidades recurrentes
- Cobertura de escaneo

### 8.2 Reportes

#### Reporte Técnico (Semanal)
- Nuevas vulnerabilidades
- Estado de remediación
- Excepciones activas
- Próximos vencimientos

#### Reporte Ejecutivo (Mensual)
- KPIs y tendencias
- Riesgos críticos abiertos
- Logros del período
- Recomendaciones

#### Reporte de Auditoría (Trimestral)
- Cumplimiento de políticas
- Efectividad del programa
- Brechas identificadas
- Plan de mejora

## 9. Comunicación

### 9.1 Notificaciones
- Vulnerabilidades críticas: Inmediata
- Parches programados: 48 horas de anticipación
- Ventanas de mantenimiento: 1 semana
- Incidentes relacionados: Según plan de comunicación

### 9.2 Canales
- Email a administradores
- Portal de gestión de vulnerabilidades
- Tickets de servicio
- Reuniones de coordinación

## 10. Mejora Continua

### 10.1 Revisión del Programa
- Efectividad de herramientas
- Cumplimiento de SLAs
- Feedback de equipos
- Benchmarking con industria

### 10.2 Lecciones Aprendidas
- Incidentes relacionados
- Remediaciones complejas
- Falsos positivos recurrentes
- Mejoras de proceso`,
  },
  {
    code: 'PROC-005',
    title: 'Procedimiento de Control de Acceso',
    description: 'Define los procesos de alta, baja y modificación de accesos',
    type: DocumentType.PROCEDURE,
    category: DocumentCategory.ACCESS_CONTROL,
    tags: ['acceso', 'usuarios', 'provisioning'],
    content: `# Procedimiento de Control de Acceso

## 1. Objetivo
Asegurar que el acceso a sistemas e información sea otorgado, modificado y revocado de manera apropiada.

## 2. Alcance
Aplica a todos los usuarios que requieran acceso a sistemas, aplicaciones, datos o instalaciones.

## 3. Tipos de Acceso

### 3.1 Por Tipo de Usuario
- **Empleados permanentes**
- **Empleados temporales**
- **Contratistas**
- **Proveedores**
- **Administradores de sistemas**
- **Usuarios privilegiados**

### 3.2 Por Tipo de Acceso
- **Sistemas operativos**
- **Aplicaciones de negocio**
- **Bases de datos**
- **Correo electrónico**
- **Acceso remoto (VPN)**
- **Instalaciones físicas**
- **Recursos cloud**

## 4. Alta de Usuarios

### 4.1 Iniciación de Solicitud

#### Solicitante Autorizado
- Gerente directo
- Responsable de área
- Recursos Humanos
- Patrocinador del proyecto

#### Información Requerida
- Nombre completo del usuario
- Puesto y departamento
- Fecha de inicio
- Sistemas/aplicaciones requeridos
- Nivel de acceso necesario
- Justificación de negocio
- Usuario de referencia (opcional)
- Fecha de expiración (si aplica)

### 4.2 Flujo de Aprobación

#### Acceso Estándar
1. Solicitud por gerente directo
2. Aprobación automática según rol
3. Provisioning por TI
4. Notificación al usuario

#### Acceso Elevado
1. Solicitud por gerente directo
2. Revisión por seguridad
3. Aprobación por propietario del sistema
4. Aprobación adicional si es necesario
5. Provisioning por TI
6. Notificación y logging

#### Acceso de Emergencia
1. Solicitud verbal autorizada
2. Provisioning inmediato
3. Documentación dentro de 24 horas
4. Revisión posterior por seguridad

### 4.3 Provisioning

#### Creación de Cuenta
- Formato de usuario: nombre.apellido
- Contraseña temporal
- Obligar cambio en primer login
- Configuración de autenticación multifactor
- Asignación a grupos según rol

#### Asignación de Accesos
- Según matriz de acceso por rol
- Principio de menor privilegio
- Accesos mínimos necesarios
- Documentación de excepciones

#### Entrega de Credenciales
- Email corporativo
- SMS para MFA
- Presencial para accesos críticos
- Nunca por canales inseguros

### 4.4 Comunicación
- Confirmación al solicitante
- Instrucciones al usuario
- Fecha de provisioning
- Contacto de soporte

## 5. Modificación de Accesos

### 5.1 Motivos de Modificación
- Cambio de puesto
- Cambio de responsabilidades
- Transferencia de departamento
- Asignación a nuevo proyecto
- Solicitud de acceso adicional
- Revocación de acceso

### 5.2 Proceso
1. Solicitud por gerente o usuario
2. Aprobación según tipo de cambio
3. Revisión de accesos existentes
4. Revocación de accesos innecesarios
5. Asignación de nuevos accesos
6. Validación con usuario
7. Actualización de documentación

## 6. Baja de Usuarios

### 6.1 Tipos de Baja

#### Terminación de Empleo
- **Voluntaria**: Último día laboral
- **Involuntaria**: Inmediato
- **Renuncia**: Aviso previo

#### Temporal
- Licencia médica
- Licencia sin goce
- Suspensión

### 6.2 Proceso de Baja

#### Pre-Baja (Si aplica)
- Notificación de RRHH a TI
- Identificación de cuentas
- Plan de transición
- Backup de datos necesarios

#### Desactivación Inmediata
Para terminación involuntaria:
1. Notificación a TI
2. Desactivación de cuentas (30 min)
3. Revocación de acceso físico
4. Desconexión de sesiones activas
5. Bloqueo de acceso remoto

#### Desactivación Programada
Para terminación voluntaria:
1. Programar para último día
2. Transferencia de conocimiento
3. Documentación de accesos
4. Desactivación automática

#### Post-Baja
- Retención de cuenta (90 días)
- Reenvío de email (si necesario)
- Archivo de datos
- Reasignación de recursos
- Eliminación completa después

### 6.3 Lista de Desactivación

#### Cuentas y Sistemas
- [ ] Active Directory / LDAP
- [ ] Email corporativo
- [ ] VPN
- [ ] Aplicaciones de negocio
- [ ] Acceso a bases de datos
- [ ] Repositorios de código
- [ ] Herramientas de colaboración
- [ ] Cloud (AWS, Azure, GCP)
- [ ] Acceso físico (tarjeta)

#### Activos
- [ ] Laptop
- [ ] Teléfono móvil
- [ ] Tablet
- [ ] Tokens de autenticación
- [ ] Llaves
- [ ] Documentación

## 7. Cuentas Especiales

### 7.1 Cuentas Administrativas
- Usuario con sufijo -admin
- Usar solo cuando sea necesario
- Sesión con timeout corto
- MFA obligatoria
- Logging detallado
- Sin uso para actividades rutinarias

### 7.2 Cuentas de Servicio
- Solicitud y aprobación formal
- Contraseñas complejas gestionadas
- Sin login interactivo
- Revisión trimestral
- Propietario asignado
- Documentación de uso

### 7.3 Cuentas Genéricas/Compartidas
- Evitar en lo posible
- Solo casos excepcionales
- Aprobación por seguridad
- Control de acceso a credencial
- Cambio de contraseña al salir usuario
- Logging exhaustivo

## 8. Revisión de Accesos

### 8.1 Frecuencia
- **Usuarios privilegiados**: Trimestral
- **Usuarios estándar**: Semestral
- **Cuentas de servicio**: Trimestral
- **Accesos externos**: Mensual

### 8.2 Proceso de Revisión
1. Extracción de lista de usuarios
2. Envío a propietarios/gerentes
3. Revisión de cada usuario:
   - ¿Usuario aún requiere acceso?
   - ¿Nivel de acceso apropiado?
   - ¿Todos los accesos necesarios?
   - ¿Accesos excesivos?
4. Documentación de cambios
5. Aplicación de modificaciones
6. Seguimiento de pendientes
7. Reporte de cumplimiento

### 8.3 Certificación
- Firma del aprobador
- Fecha de revisión
- Cambios aplicados
- Excepciones identificadas
- Archivo por 3 años

## 9. Gestión de Contraseñas

### 9.1 Requisitos
- Longitud mínima: 12 caracteres
- Complejidad: mayúsculas, minúsculas, números, símbolos
- No reutilizar últimas 12 contraseñas
- Cambio cada 90 días (o 180 con MFA)
- No contraseñas comunes o fáciles de adivinar

### 9.2 Restablecimiento
- Auto-servicio con preguntas de seguridad
- Verificación por help desk
- Envío a email/SMS registrado
- Cambio obligatorio en primer uso
- Logging de restablecimientos

### 9.3 Cuenta Bloqueada
- Desbloqueo por help desk
- Verificación de identidad
- Investigación si múltiples bloqueos
- Logging de eventos

## 10. Autenticación Multifactor (MFA)

### 10.1 Obligatorio Para
- Acceso remoto (VPN)
- Aplicaciones con datos sensibles
- Acceso administrativo
- Portales externos
- Correo electrónico (OWA)

### 10.2 Métodos Aceptados
- App autenticadora (preferido)
- SMS (segunda opción)
- Token hardware
- Notificación push
- Biometría

### 10.3 Registro de MFA
- Proceso de enrollment
- Múltiples métodos de backup
- Actualización de contacto
- Proceso de recuperación

## 11. Monitoreo y Auditoría

### 11.1 Eventos a Monitorear
- Intentos fallidos de login
- Accesos a horarios inusuales
- Acceso desde ubicaciones inusuales
- Escalamiento de privilegios
- Cambios en grupos de seguridad
- Desactivación de logging

### 11.2 Reportes
- Cuentas sin uso (90 días)
- Cuentas con múltiples intentos fallidos
- Nuevas cuentas privilegiadas
- Accesos sin MFA
- Excepciones activas

## 12. Excepciones
- Solicitud formal requerida
- Justificación de negocio
- Aprobación por seguridad
- Duración limitada
- Revisión mensual
- Controles compensatorios`,
  },
];
