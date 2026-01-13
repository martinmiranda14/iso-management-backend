import {
  DocumentType,
  DocumentCategory,
} from '../entities/document.entity';
import { ADDITIONAL_TEMPLATES } from './additional-templates';
import { COMPREHENSIVE_TEMPLATES } from './comprehensive-templates';

export interface DocumentTemplate {
  code: string;
  title: string;
  description: string;
  content: string;
  type: DocumentType;
  category: DocumentCategory;
  relatedControlIds?: string[];
  tags: string[];
}

const BASE_TEMPLATES: DocumentTemplate[] = [
  {
    code: 'POL-001',
    title: 'Política de Seguridad de la Información',
    description:
      'Política general que establece el compromiso de la organización con la seguridad de la información',
    type: DocumentType.POLICY,
    category: DocumentCategory.INFORMATION_SECURITY,
    tags: ['iso27001', 'política', 'seguridad'],
    content: `# Política de Seguridad de la Información

## 1. Propósito
Esta política establece las directrices generales para la protección de los activos de información de [NOMBRE DE LA ORGANIZACIÓN].

## 2. Alcance
Esta política aplica a todos los empleados, contratistas, terceros y cualquier persona que tenga acceso a los activos de información de la organización.

## 3. Objetivos
- Proteger la confidencialidad, integridad y disponibilidad de la información
- Cumplir con los requisitos legales, regulatorios y contractuales
- Mantener la continuidad del negocio
- Minimizar los riesgos de seguridad de la información

## 4. Responsabilidades
- **Alta Dirección**: Aprobar y respaldar esta política
- **CISO/Responsable de Seguridad**: Implementar y mantener el SGSI
- **Empleados**: Cumplir con las políticas y reportar incidentes

## 5. Principios Fundamentales
- La información es un activo valioso que debe protegerse
- Todos son responsables de la seguridad de la información
- El acceso a la información debe basarse en el principio de mínimo privilegio
- La seguridad debe integrarse en todos los procesos

## 6. Revisión
Esta política será revisada anualmente o cuando ocurran cambios significativos.

## 7. Incumplimiento
El incumplimiento de esta política puede resultar en acciones disciplinarias.`,
  },
  {
    code: 'POL-002',
    title: 'Política de Control de Acceso',
    description:
      'Define los requisitos para el control de acceso a los sistemas y la información',
    type: DocumentType.POLICY,
    category: DocumentCategory.ACCESS_CONTROL,
    tags: ['iso27001', 'control de acceso', 'autenticación'],
    content: `# Política de Control de Acceso

## 1. Propósito
Establecer las directrices para gestionar el acceso a los sistemas de información y datos de la organización.

## 2. Alcance
Aplica a todos los sistemas, aplicaciones, datos y redes de la organización.

## 3. Principios de Control de Acceso
- **Necesidad de conocer**: El acceso se otorga basándose en las responsabilidades del puesto
- **Mínimo privilegio**: Los usuarios reciben solo los permisos necesarios
- **Segregación de funciones**: Separación de responsabilidades críticas

## 4. Gestión de Acceso de Usuarios
- Proceso formal de alta, modificación y baja de usuarios
- Revisión periódica de derechos de acceso (trimestral)
- Desactivación inmediata al término de la relación laboral

## 5. Autenticación
- Contraseñas de al menos 12 caracteres con complejidad
- Autenticación multifactor para accesos críticos
- Bloqueo de cuenta tras 5 intentos fallidos

## 6. Control de Acceso Remoto
- VPN obligatoria para accesos remotos
- Dispositivos corporativos o aprobados
- Prohibido uso de redes WiFi públicas sin VPN

## 7. Monitoreo
- Registro de todos los eventos de acceso
- Revisión de logs de seguridad
- Alertas de actividades sospechosas`,
  },
  {
    code: 'POL-003',
    title: 'Política de Uso Aceptable',
    description:
      'Define el uso apropiado de los recursos tecnológicos de la organización',
    type: DocumentType.POLICY,
    category: DocumentCategory.OPERATIONS,
    tags: ['uso aceptable', 'recursos', 'conducta'],
    content: `# Política de Uso Aceptable

## 1. Propósito
Definir el uso apropiado de los recursos tecnológicos de la organización.

## 2. Uso Permitido
- Actividades relacionadas con el trabajo
- Uso personal mínimo durante descansos
- Comunicaciones profesionales

## 3. Uso Prohibido
- Acceso a contenido ilegal o inapropiado
- Descarga de software no autorizado
- Compartir credenciales de acceso
- Uso de herramientas de hacking o penetración sin autorización
- Envío de información confidencial sin cifrado

## 4. Correo Electrónico
- Usar solo cuentas corporativas para asuntos de trabajo
- No abrir adjuntos sospechosos
- No compartir información confidencial sin protección

## 5. Internet
- Uso de internet para fines laborales
- Prohibido acceso a sitios maliciosos o de alto riesgo
- Navegación monitorizada por seguridad

## 6. Dispositivos Móviles
- Cifrado obligatorio
- Contraseña o biometría
- Posibilidad de borrado remoto

## 7. Consecuencias
El incumplimiento puede resultar en suspensión de acceso y medidas disciplinarias.`,
  },
  {
    code: 'PROC-001',
    title: 'Procedimiento de Gestión de Incidentes de Seguridad',
    description:
      'Define el proceso para identificar, reportar y gestionar incidentes de seguridad',
    type: DocumentType.PROCEDURE,
    category: DocumentCategory.INCIDENT_MANAGEMENT,
    tags: ['incidentes', 'respuesta', 'seguridad'],
    content: `# Procedimiento de Gestión de Incidentes de Seguridad

## 1. Objetivo
Establecer un proceso sistemático para la gestión de incidentes de seguridad de la información.

## 2. Alcance
Aplica a todos los incidentes de seguridad que afecten los activos de información.

## 3. Definiciones
- **Incidente de Seguridad**: Evento que compromete la confidencialidad, integridad o disponibilidad
- **Evento**: Ocurrencia observable en un sistema o red

## 4. Clasificación de Incidentes
- **Crítico**: Impacto severo, requiere respuesta inmediata
- **Alto**: Impacto significativo, respuesta en 2 horas
- **Medio**: Impacto moderado, respuesta en 8 horas
- **Bajo**: Impacto menor, respuesta en 24 horas

## 5. Proceso de Gestión

### 5.1 Detección
- Monitoreo continuo de sistemas
- Alertas automatizadas
- Reportes de usuarios

### 5.2 Reporte
1. Contactar al equipo de seguridad inmediatamente
2. No intentar resolver sin autorización
3. Documentar toda evidencia
4. Canales: email: security@empresa.com, teléfono: ext. 5000

### 5.3 Clasificación y Priorización
El equipo de seguridad evaluará:
- Impacto en el negocio
- Tipo de información afectada
- Alcance del incidente

### 5.4 Contención
- Aislar sistemas afectados
- Preservar evidencia
- Implementar medidas temporales

### 5.5 Erradicación
- Eliminar causa raíz
- Aplicar parches
- Fortalecer controles

### 5.6 Recuperación
- Restaurar sistemas
- Validar funcionamiento
- Monitoreo intensivo

### 5.7 Lecciones Aprendidas
- Reunión post-incidente
- Documentación de hallazgos
- Implementación de mejoras

## 6. Responsabilidades
- **Empleados**: Reportar incidentes inmediatamente
- **Equipo de Seguridad**: Gestionar y resolver incidentes
- **Gerentes**: Apoyar la respuesta y comunicación

## 7. Comunicación
- Interna: Según necesidad de conocer
- Externa: Solo con aprobación de alta dirección
- Legal: Cumplir con requisitos de notificación`,
  },
  {
    code: 'PROC-002',
    title: 'Procedimiento de Gestión de Cambios',
    description:
      'Define el proceso para gestionar cambios en sistemas y aplicaciones',
    type: DocumentType.PROCEDURE,
    category: DocumentCategory.OPERATIONS,
    tags: ['cambios', 'operaciones', 'control'],
    content: `# Procedimiento de Gestión de Cambios

## 1. Objetivo
Asegurar que los cambios en sistemas e infraestructura se implementen de manera controlada.

## 2. Alcance
Aplica a todos los cambios en producción, incluyendo:
- Aplicaciones
- Infraestructura
- Configuraciones
- Parches de seguridad

## 3. Tipos de Cambios

### 3.1 Cambio Estándar
- Pre-aprobado
- Bajo riesgo
- Procedimiento documentado
- Ejemplo: Parches mensuales

### 3.2 Cambio Normal
- Requiere aprobación
- Evaluación de riesgo
- Plan de respaldo
- Ejemplo: Actualización de aplicación

### 3.3 Cambio de Emergencia
- Respuesta a incidente crítico
- Aprobación acelerada
- Documentación post-implementación

## 4. Proceso de Gestión de Cambios

### 4.1 Solicitud
1. Completar formulario de cambio
2. Incluir:
   - Descripción del cambio
   - Justificación de negocio
   - Sistemas afectados
   - Fecha propuesta
   - Plan de implementación
   - Plan de respaldo

### 4.2 Evaluación
Comité de cambios evalúa:
- Riesgo técnico
- Impacto en el negocio
- Requisitos de recursos
- Dependencias
- Ventana de mantenimiento

### 4.3 Aprobación
- Cambios bajos: Líder técnico
- Cambios medios: Gerente TI
- Cambios altos: Comité de cambios
- Cambios críticos: Alta dirección

### 4.4 Implementación
1. Notificar a usuarios afectados
2. Crear respaldo completo
3. Implementar según plan
4. Validar funcionamiento
5. Documentar resultado

### 4.5 Revisión Post-Implementación
- Validar éxito del cambio
- Verificar ausencia de problemas
- Cerrar ticket de cambio
- Actualizar documentación

## 5. Cambios de Emergencia
1. Notificación verbal al gerente TI
2. Implementación inmediata
3. Documentación dentro de 24 horas
4. Revisión en siguiente comité

## 6. Comité de Cambios
- **Reuniones**: Semanales
- **Participantes**: TI, Seguridad, Operaciones
- **Agenda**: Revisar cambios pendientes`,
  },
  {
    code: 'POL-004',
    title: 'Política de Clasificación de la Información',
    description:
      'Establece los niveles de clasificación y el manejo de la información',
    type: DocumentType.POLICY,
    category: DocumentCategory.ASSET_MANAGEMENT,
    tags: ['clasificación', 'información', 'activos'],
    content: `# Política de Clasificación de la Información

## 1. Propósito
Establecer un esquema de clasificación para proteger la información según su criticidad.

## 2. Niveles de Clasificación

### 2.1 PÚBLICO
- **Definición**: Información destinada al público general
- **Ejemplos**: Materiales de marketing, comunicados de prensa
- **Protección**: Ninguna especial
- **Marcado**: No requerido

### 2.2 USO INTERNO
- **Definición**: Información para uso dentro de la organización
- **Ejemplos**: Políticas internas, organigramas
- **Protección**: Control de acceso básico
- **Marcado**: "Uso Interno"
- **Distribución**: Solo empleados

### 2.3 CONFIDENCIAL
- **Definición**: Información sensible del negocio
- **Ejemplos**: Información financiera, datos de clientes
- **Protección**:
  - Cifrado en tránsito y reposo
  - Acceso basado en roles
  - Registro de accesos
- **Marcado**: "CONFIDENCIAL"
- **Distribución**: Con autorización explícita

### 2.4 ESTRICTAMENTE CONFIDENCIAL
- **Definición**: Información crítica del negocio
- **Ejemplos**: Datos personales sensibles, propiedad intelectual crítica
- **Protección**:
  - Cifrado fuerte
  - Autenticación multifactor
  - DLP (Prevención de pérdida de datos)
  - Auditoría completa
- **Marcado**: "ESTRICTAMENTE CONFIDENCIAL"
- **Distribución**: Solo personal autorizado, NDA requerido

## 3. Responsabilidades

### 3.1 Propietario de la Información
- Clasificar la información
- Definir controles de acceso
- Revisar clasificación anualmente

### 3.2 Usuarios
- Respetar la clasificación
- Proteger según el nivel
- Reportar uso indebido

## 4. Manejo de Información

### 4.1 Creación
- Clasificar al momento de crear
- Aplicar marcado apropiado

### 4.2 Almacenamiento
- Usar ubicaciones autorizadas
- Aplicar controles según clasificación

### 4.3 Transmisión
- Cifrar información confidencial
- Usar canales seguros

### 4.4 Destrucción
- **Público/Interno**: Reciclaje normal
- **Confidencial**: Destrucción segura
- **Estrictamente Confidencial**: Destrucción certificada

## 5. Revisión
- Clasificación revisada anualmente
- Reclasificación cuando sea necesario`,
  },
  {
    code: 'PROC-003',
    title: 'Procedimiento de Backup y Recuperación',
    description: 'Define el proceso de respaldo y restauración de datos',
    type: DocumentType.PROCEDURE,
    category: DocumentCategory.BUSINESS_CONTINUITY,
    tags: ['backup', 'recuperación', 'continuidad'],
    content: `# Procedimiento de Backup y Recuperación

## 1. Objetivo
Asegurar la disponibilidad de la información mediante respaldos regulares y procedimientos de recuperación.

## 2. Alcance
Aplica a todos los sistemas críticos y datos de la organización.

## 3. Política de Respaldos

### 3.1 Clasificación de Sistemas
- **Críticos**: RTO < 4 horas, RPO < 1 hora
- **Importantes**: RTO < 24 horas, RPO < 24 horas
- **Normales**: RTO < 72 horas, RPO < 72 horas

### 3.2 Frecuencia de Respaldos

#### Backup Completo
- Semanal (domingos 2:00 AM)
- Todos los datos

#### Backup Incremental
- Diario (2:00 AM)
- Solo cambios desde último backup

#### Backup Diferencial
- Miércoles y viernes (2:00 AM)
- Cambios desde último completo

## 4. Proceso de Backup

### 4.1 Preparación
1. Verificar espacio disponible
2. Validar conectividad
3. Notificar inicio de ventana

### 4.2 Ejecución
1. Ejecutar scripts automatizados
2. Monitorear progreso
3. Validar completitud

### 4.3 Verificación
1. Comprobar integridad
2. Validar registros
3. Realizar prueba de restauración (mensual)

### 4.4 Almacenamiento
- **On-site**: Servidor local
- **Off-site**: Nube (cifrado)
- **Retención**:
  - Diarios: 30 días
  - Semanales: 12 semanas
  - Mensuales: 12 meses
  - Anuales: 7 años

## 5. Proceso de Recuperación

### 5.1 Solicitud de Recuperación
1. Ticket de servicio
2. Aprobar por gerente
3. Documentar justificación

### 5.2 Evaluación
1. Identificar backup adecuado
2. Evaluar impacto
3. Definir plan de recuperación

### 5.3 Restauración
1. Notificar a usuarios
2. Aislar sistema si es necesario
3. Ejecutar restauración
4. Validar datos
5. Pruebas funcionales

### 5.4 Verificación
1. Confirmar completitud
2. Validar con usuario
3. Documentar proceso

## 6. Pruebas de Recuperación
- **Frecuencia**: Trimestral
- **Alcance**: Sistemas críticos
- **Documentación**: Registro de resultados

## 7. Monitoreo y Alertas
- Alertas automáticas de fallos
- Dashboard de estado de backups
- Reportes semanales a gerencia

## 8. Cifrado
- Todos los backups cifrados
- Claves gestionadas por equipo de seguridad
- Rotación de claves anual`,
  },
];

export const ISO27001_TEMPLATES: DocumentTemplate[] = [
  ...BASE_TEMPLATES,
  ...ADDITIONAL_TEMPLATES,
  ...COMPREHENSIVE_TEMPLATES,
];
