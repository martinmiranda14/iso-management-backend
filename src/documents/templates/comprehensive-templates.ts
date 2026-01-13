import {
  DocumentType,
  DocumentCategory,
} from '../entities/document.entity';
import { DocumentTemplate } from './iso27001-templates';

export const COMPREHENSIVE_TEMPLATES: DocumentTemplate[] = [
  // ============================================
  // POLÍTICAS ADICIONALES COMPREHENSIVAS
  // ============================================

  {
    code: 'POL-011',
    title: 'Política de Continuidad del Negocio',
    description:
      'Establece el marco para asegurar la continuidad de las operaciones críticas',
    type: DocumentType.POLICY,
    category: DocumentCategory.BUSINESS_CONTINUITY,
    tags: ['continuidad', 'bcp', 'recuperación'],
    content: `# Política de Continuidad del Negocio

## 1. Propósito
Establecer un marco para garantizar la continuidad de las operaciones del negocio ante interrupciones.

## 2. Alcance
Aplica a todos los procesos críticos del negocio y sistemas de soporte.

## 3. Objetivos
- Minimizar el impacto de interrupciones en el negocio
- Asegurar recuperación oportuna de operaciones críticas
- Proteger la reputación y los intereses de stakeholders
- Cumplir con obligaciones contractuales y regulatorias

## 4. Análisis de Impacto al Negocio (BIA)
- Identificación de procesos críticos
- Determinación de RTO (Recovery Time Objective)
- Determinación de RPO (Recovery Point Objective)
- Evaluación de dependencias
- Actualización anual o ante cambios significativos

## 5. Estrategias de Continuidad
- Sitio alternativo de trabajo
- Trabajo remoto distribuido
- Acuerdos con proveedores alternativos
- Redundancia de sistemas críticos
- Personal cross-trained

## 6. Plan de Continuidad del Negocio
Debe incluir:
- Procesos y servicios críticos
- Recursos necesarios
- Equipos de respuesta
- Procedimientos de activación
- Contactos de emergencia
- Comunicación de crisis

## 7. Plan de Recuperación ante Desastres (DRP)
- Procedimientos de recuperación de TI
- Sitio de recuperación de desastres
- Restore de backups
- Reconexión de redes
- Validación de sistemas

## 8. Roles y Responsabilidades
- **Comité de Crisis**: Toma de decisiones estratégicas
- **Equipo de Continuidad**: Ejecución de planes
- **Coordinador de BCP**: Gestión general del programa
- **Líderes de Área**: Recuperación de sus procesos

## 9. Capacitación y Concienciación
- Capacitación anual para equipos de continuidad
- Concienciación general para todos los empleados
- Entrenamiento específico por rol
- Talleres de simulación

## 10. Pruebas y Ejercicios
- **Pruebas de escritorio**: Trimestral
- **Simulacros parciales**: Semestral
- **Ejercicio completo**: Anual
- Documentación de resultados
- Plan de mejora continua

## 11. Mantenimiento del Plan
- Revisión semestral
- Actualización tras cambios organizacionales
- Actualización post-incidente
- Incorporación de lecciones aprendidas

## 12. Comunicación
- Plan de comunicación interna
- Comunicación a clientes
- Comunicación a medios (si aplica)
- Actualización a stakeholders`,
  },

  {
    code: 'POL-012',
    title: 'Política de Cumplimiento Legal y Regulatorio',
    description:
      'Define el compromiso con el cumplimiento de leyes y regulaciones aplicables',
    type: DocumentType.POLICY,
    category: DocumentCategory.COMPLIANCE,
    tags: ['cumplimiento', 'legal', 'regulatorio'],
    content: `# Política de Cumplimiento Legal y Regulatorio

## 1. Propósito
Asegurar que la organización cumple con todas las leyes, regulaciones y obligaciones contractuales aplicables.

## 2. Alcance
Aplica a todas las operaciones, procesos y empleados de la organización.

## 3. Compromiso
La organización se compromete a:
- Identificar requisitos legales y regulatorios aplicables
- Implementar controles para cumplir requisitos
- Monitorear cambios en legislación
- Mantener evidencia de cumplimiento
- Remediar incumplimientos prontamente

## 4. Áreas de Cumplimiento

### 4.1 Protección de Datos Personales
- GDPR (Unión Europea)
- CCPA (California)
- LGPD (Brasil)
- Leyes locales de privacidad
- Registros ante autoridades

### 4.2 Propiedad Intelectual
- Licenciamiento de software
- Uso de marcas registradas
- Derechos de autor
- Patentes

### 4.3 Seguridad de la Información
- ISO 27001
- SOC 2
- PCI-DSS (si aplica)
- HIPAA (si aplica)
- Regulaciones sectoriales

### 4.4 Laboral
- Contratos de trabajo
- Seguridad y salud ocupacional
- No discriminación
- Prevención de acoso

### 4.5 Fiscal y Contable
- Declaraciones fiscales
- Retención de documentación
- Auditorías financieras

### 4.6 Anti-corrupción
- Prohibición de sobornos
- Regalos y atenciones
- Conflictos de interés
- Due diligence de terceros

### 4.7 Comercio Internacional
- Control de exportaciones
- Sanciones económicas
- Aduanas

## 5. Gestión del Cumplimiento

### 5.1 Identificación
- Inventario de requisitos legales
- Mapeo a procesos
- Asignación de responsables
- Actualización continua

### 5.2 Implementación
- Controles para cumplir requisitos
- Procedimientos documentados
- Capacitación de personal
- Herramientas de soporte

### 5.3 Monitoreo
- Auditorías internas
- Auditorías externas
- Certificaciones
- Auto-evaluaciones

### 5.4 Reporte
- Reporte a alta dirección
- Reporte a autoridades (cuando requerido)
- Registro de incumplimientos
- Acciones correctivas

## 6. Asesoría Legal
- Consultar con abogados en asuntos complejos
- Revisión legal de contratos
- Asesoría en investigaciones
- Representación ante autoridades

## 7. Retención de Documentos
- Políticas de retención por tipo de documento
- Cumplir con plazos legales mínimos
- Destrucción segura al finalizar retención
- E-discovery ready

## 8. Respuesta a Requerimientos Legales
- Procedimiento para citatorios
- Coordinación con legal
- Preservación de evidencia
- Cooperación con autoridades

## 9. Violaciones y Sanciones
- Investigación de violaciones
- Medidas disciplinarias
- Reporte a autoridades (si requerido)
- Remediación

## 10. Capacitación
- Capacitación anual en cumplimiento
- Entrenamiento específico por rol
- Actualizaciones ante cambios legales
- Evaluación de conocimiento`,
  },

  {
    code: 'POL-013',
    title: 'Política de Seguridad en la Nube (Cloud Security)',
    description:
      'Define requisitos de seguridad para servicios y datos en la nube',
    type: DocumentType.POLICY,
    category: DocumentCategory.OPERATIONS,
    tags: ['cloud', 'nube', 'seguridad', 'saas'],
    content: `# Política de Seguridad en la Nube

## 1. Propósito
Establecer requisitos de seguridad para la adopción y uso de servicios en la nube.

## 2. Alcance
Aplica a todos los servicios cloud: IaaS, PaaS, SaaS.

## 3. Principios
- Shared Responsibility Model
- Defense in Depth
- Data Sovereignty
- Vendor Management
- Security by Design

## 4. Clasificación de Servicios Cloud

### 4.1 Por Sensibilidad de Datos
- **Crítico**: Datos confidenciales/personales sensibles
- **Alto**: Información interna confidencial
- **Medio**: Información interna
- **Bajo**: Información pública

### 4.2 Por Tipo de Servicio
- **IaaS**: AWS EC2, Azure VMs, GCP Compute
- **PaaS**: Heroku, AWS Lambda, Azure Functions
- **SaaS**: Microsoft 365, Salesforce, Slack

## 5. Proceso de Aprobación

### 5.1 Servicios Críticos/Alto
1. Solicitud formal
2. Evaluación de seguridad
3. Revisión de contrato
4. Auditoría de configuración
5. Aprobación por CISO
6. Aprobación por alta dirección

### 5.2 Servicios Medio/Bajo
1. Solicitud
2. Verificación de requisitos básicos
3. Aprobación por gerente TI

### 5.3 Shadow IT
- Prohibido uso de servicios no aprobados
- Proceso de amnistía para regularizar
- Monitoreo de uso no autorizado

## 6. Requisitos de Seguridad

### 6.1 Autenticación e Identidad
- SSO (Single Sign-On) obligatorio
- MFA para todos los accesos
- Integración con directorio corporativo
- Gestión centralizada de identidades

### 6.2 Autorización y Acceso
- RBAC (Role-Based Access Control)
- Principio de menor privilegio
- Revisión trimestral de accesos
- Just-in-time access para privilegios

### 6.3 Cifrado
- Datos en tránsito: TLS 1.2+
- Datos en reposo: AES-256
- Gestión de claves: KMS o equivalente
- BYOK (Bring Your Own Key) para datos críticos

### 6.4 Red y Conectividad
- Private Link / VPN para conexiones críticas
- Segmentación de redes
- Firewalls y Security Groups
- DDoS protection

### 6.5 Logging y Monitoreo
- Logs centralizados
- SIEM integration
- Alertas de seguridad
- Retención mínima 12 meses

### 6.6 Backup y Recuperación
- Backups automáticos
- Pruebas de recuperación trimestrales
- RTO/RPO definidos
- Backups en región diferente

## 7. Evaluación de Proveedores

### 7.1 Due Diligence
- Certificaciones: ISO 27001, SOC 2, etc.
- Políticas de seguridad
- Ubicación de datos
- SLA de disponibilidad
- Proceso de gestión de vulnerabilidades
- Historial de incidentes

### 7.2 Contrato
- Cláusulas de seguridad
- SLA de seguridad
- Derecho de auditoría
- Notificación de brechas
- Portabilidad de datos
- Eliminación de datos

## 8. Arquitectura Segura

### 8.1 Diseño
- Well-Architected Framework
- Separación de ambientes
- Infraestructura como código
- Immutable infrastructure

### 8.2 Configuración Segura
- CIS Benchmarks
- Hardening de servicios
- Deshabilitar servicios innecesarios
- Parches automáticos

### 8.3 Gestión de Secretos
- Secrets Manager / Key Vault
- Rotación automática
- Auditoría de acceso
- No secretos en código

## 9. Residencia de Datos
- Definir geografía permitida
- Cumplir con requisitos legales
- Prevenir transferencias no autorizadas
- Monitorear ubicación de datos

## 10. Gestión de Configuración
- Infrastructure as Code
- Control de versiones
- Revisión de cambios
- Compliance as Code

## 11. Respuesta a Incidentes Cloud
- Playbooks específicos para cloud
- Forensics en cloud
- Preservación de evidencia
- Coordinación con proveedor

## 12. Gestión de Costos
- Presupuestos y alertas
- Recursos sin uso
- Right-sizing
- Reserved instances

## 13. Multi-Cloud y Hybrid Cloud
- Estrategia definida
- Gestión unificada
- Portabilidad de workloads
- Consistent security posture

## 14. Compliance en Cloud
- Entender shared responsibility
- Compliance mapping
- Auditorías cloud
- Evidencia de controles

## 15. Salida del Proveedor
- Plan de exit strategy
- Exportación de datos
- Eliminación verificada
- Transferencia a nuevo proveedor`,
  },

  {
    code: 'POL-014',
    title: 'Política de Gestión de Identidades y Accesos (IAM)',
    description:
      'Marco completo para gestión de identidades digitales y control de acceso',
    type: DocumentType.POLICY,
    category: DocumentCategory.ACCESS_CONTROL,
    tags: ['iam', 'identidad', 'acceso', 'sso'],
    content: `# Política de Gestión de Identidades y Accesos (IAM)

## 1. Propósito
Establecer un marco robusto para la gestión de identidades digitales y control de acceso.

## 2. Alcance
Aplica a todas las identidades (humanas y no humanas) y todos los sistemas.

## 3. Principios IAM
- Identity as the security perimeter
- Zero Trust - Never trust, always verify
- Least privilege access
- Segregation of duties
- Identity lifecycle management

## 4. Tipos de Identidades

### 4.1 Identidades Humanas
- **Empleados**: Permanentes y temporales
- **Contratistas**: Externos en proyectos
- **Proveedores**: Acceso a sistemas específicos
- **Partners**: Acceso federado
- **Clientes**: Portal de clientes/partners

### 4.2 Identidades No Humanas
- **Cuentas de servicio**: Aplicaciones y servicios
- **API keys**: Integración de sistemas
- **Service principals**: Cloud services
- **Dispositivos**: IoT, servidores, endpoints

## 5. Ciclo de Vida de Identidades

### 5.1 Provisioning
- Solicitud formal con aprobación
- Verificación de identidad
- Creación de cuenta
- Asignación de roles
- Entrega de credenciales
- Capacitación de seguridad

### 5.2 Modificación
- Cambio de rol/puesto
- Accesos adicionales temporales
- Ajuste de privilegios
- Re-certificación de accesos

### 5.3 Deprovisioning
- Desactivación automática en fecha programada
- Desactivación inmediata por terminación
- Transferencia de ownership
- Archivado de cuenta
- Eliminación definitiva

## 6. Autenticación

### 6.1 Factores de Autenticación
- **Factor 1 - Conocimiento**: Contraseña
- **Factor 2 - Posesión**: App móvil, token, SMS
- **Factor 3 - Inherencia**: Biometría

### 6.2 Requisitos por Tipo de Acceso
- **Usuarios estándar**: Contraseña + MFA
- **Administradores**: Contraseña fuerte + MFA + IP whitelisting
- **Acceso remoto**: MFA obligatorio
- **Acceso privilegiado**: PAM solution + MFA
- **APIs**: API keys + OAuth 2.0 / JWT

### 6.3 Contraseñas
- Longitud mínima: 14 caracteres
- Complejidad: 3 de 4 tipos de caracteres
- No reutilizar últimas 24 contraseñas
- Expiración: 90 días (sin MFA) o 365 días (con MFA)
- Bloqueo tras 5 intentos fallidos
- No contraseñas por defecto

### 6.4 Autenticación Multifactor (MFA)
- Obligatorio para:
  - Acceso remoto (VPN)
  - Cuentas administrativas
  - Acceso a sistemas críticos
  - Acceso a datos sensibles
- Métodos aprobados:
  - App autenticadora (preferido)
  - Hardware token (FIDO2)
  - Notificación push
  - SMS (último recurso)

### 6.5 Single Sign-On (SSO)
- SSO corporativo obligatorio
- Protocolo: SAML 2.0 / OAuth 2.0 / OpenID Connect
- Integración con todos los sistemas posible
- Session timeout: 8 horas laborales

## 7. Autorización

### 7.1 Modelo RBAC (Role-Based Access Control)
- Definición de roles estándar
- Roles basados en funciones de negocio
- Roles no acumulativos
- Revisión trimestral de roles

### 7.2 Modelo ABAC (Attribute-Based Access Control)
- Políticas basadas en atributos
- Contexto de acceso
- Decisiones dinámicas

### 7.3 Privilegios Mínimos
- Just-enough access (JEA)
- Just-in-time access (JIT)
- Time-bound privileges
- Aprobación para elevación

### 7.4 Segregación de Funciones (SoD)
- Matriz de segregación definida
- Prevención de conflictos
- Detección y resolución de violaciones
- Compensating controls

## 8. Gestión de Accesos Privilegiados (PAM)

### 8.1 Cuentas Privilegiadas
- Inventario centralizado
- PAM solution obligatorio
- Check-out de credenciales
- Sesiones grabadas
- Rotación automática de passwords

### 8.2 Acceso Administrativo
- Cuentas separadas (user vs admin)
- Bastion hosts / Jump servers
- Workstations administrativas dedicadas
- Aprobación de acceso
- MFA obligatorio

### 8.3 Break-glass Accounts
- Cuentas de emergencia documentadas
- Credenciales en sobre sellado
- Uso excepcional
- Auditoría exhaustiva

## 9. Federación de Identidades

### 9.1 Identidades Federadas
- SAML 2.0 Federation
- Trust establishment con partners
- Attribute mapping
- Just-in-time provisioning

### 9.2 Social Login
- Solo para aplicaciones de consumidor
- Limitado a autenticación
- Verificación de email

## 10. Certificación y Re-certificación

### 10.1 Frecuencia
- Usuarios estándar: Semestral
- Cuentas privilegiadas: Trimestral
- Cuentas externas: Mensual
- Cuentas de servicio: Trimestral

### 10.2 Proceso
- Revisión por propietarios de recursos
- Revisión por gerentes de usuarios
- Attestation formal
- Remediación de discrepancias
- Evidencia para auditoría

## 11. Gestión de Sesiones
- Timeout de inactividad: 15 minutos
- Timeout absoluto: 8 horas
- Re-autenticación para acciones sensibles
- Prevención de session hijacking
- Logout completo

## 12. Monitoreo y Auditoría
- Logging centralizado de eventos IAM
- SIEM integration
- Anomaly detection
- User behavior analytics (UBA)
- Alertas en tiempo real

## 13. APIs e Integraciones
- OAuth 2.0 para delegación
- API Gateway para control
- Rate limiting
- API key rotation
- Revocación de tokens

## 14. Identidades de Dispositivos
- Registro de dispositivos
- Health attestation
- Conditional access
- Device compliance policies

## 15. Gestión de Claves y Certificados
- PKI infrastructure
- Certificate lifecycle management
- Key rotation policies
- Hardware Security Modules (HSM)`,
  },

  {
    code: 'POL-015',
    title: 'Política de Respuesta a Incidentes de Ciberseguridad',
    description:
      'Marco estructurado para detección y respuesta a incidentes de seguridad',
    type: DocumentType.POLICY,
    category: DocumentCategory.INCIDENT_MANAGEMENT,
    tags: ['incidentes', 'respuesta', 'ciberataque', 'soc'],
    content: `# Política de Respuesta a Incidentes de Ciberseguridad

## 1. Propósito
Establecer un marco estructurado para detectar, responder y recuperarse de incidentes de ciberseguridad.

## 2. Alcance
Aplica a todos los incidentes de seguridad que afecten sistemas, redes, datos o personas.

## 3. Definiciones

### 3.1 Evento de Seguridad
Ocurrencia observable que puede indicar un incidente.

### 3.2 Incidente de Seguridad
Evento que compromete la confidencialidad, integridad o disponibilidad.

### 3.3 Brecha de Datos
Incidente que resulta en acceso, divulgación o pérdida de datos sensibles.

## 4. Clasificación de Incidentes

### 4.1 Severidad 1 - Crítica
- **Impacto**: Severo en el negocio
- **Ejemplos**:
  - Ransomware generalizado
  - Brecha masiva de datos
  - Compromiso de infraestructura crítica
  - APT (Advanced Persistent Threat)
- **Respuesta**: Inmediata 24/7
- **Escalamiento**: Alta dirección + autoridades

### 4.2 Severidad 2 - Alta
- **Impacto**: Significativo
- **Ejemplos**:
  - Malware contenido
  - Compromiso de cuenta privilegiada
  - Exfiltración limitada de datos
  - DDoS efectivo
- **Respuesta**: 2 horas
- **Escalamiento**: Gerencia + CISO

### 4.3 Severidad 3 - Media
- **Impacto**: Moderado
- **Ejemplos**:
  - Phishing exitoso individual
  - Vulnerabilidad crítica detectada
  - Acceso no autorizado contenido
- **Respuesta**: 8 horas
- **Escalamiento**: Gerente TI

### 4.4 Severidad 4 - Baja
- **Impacto**: Mínimo
- **Ejemplos**:
  - Intento de phishing bloqueado
  - Malware detectado y bloqueado
  - Violación menor de política
- **Respuesta**: 24 horas
- **Escalamiento**: Equipo de seguridad

## 5. Estructura del Equipo de Respuesta

### 5.1 CSIRT (Computer Security Incident Response Team)
- **Incident Commander**: Coordinación general
- **Technical Lead**: Análisis y remediación
- **Communications Lead**: Comunicaciones internas/externas
- **Legal Counsel**: Aspectos legales
- **HR Representative**: Incidentes internos
- **Business Representative**: Impacto al negocio

### 5.2 SOC (Security Operations Center)
- Monitoreo 24/7
- Primera respuesta
- Triaje de incidentes
- Escalamiento

### 5.3 Recursos Externos
- Forensics externos
- Firmas legales especializadas
- Relaciones públicas
- Proveedores de servicios

## 6. Proceso de Respuesta a Incidentes

### 6.1 Fase 1: Preparación
- Herramientas de respuesta actualizadas
- Playbooks documentados
- Capacitación del equipo
- Simulacros regulares
- Contactos actualizados

### 6.2 Fase 2: Detección e Identificación
**Fuentes de Detección:**
- SIEM alerts
- IDS/IPS
- Endpoint detection (EDR)
- Antivirus/Antimalware
- Monitoreo de red
- Reportes de usuarios
- Threat intelligence
- Bug bounty

**Acciones:**
- Validar evento
- Clasificar severidad
- Documentar hallazgos iniciales
- Notificar al CSIRT

### 6.3 Fase 3: Contención
**Contención a Corto Plazo:**
- Aislar sistemas afectados
- Bloquear IPs/dominios maliciosos
- Deshabilitar cuentas comprometidas
- Preservar evidencia
- Implementar workarounds

**Contención a Largo Plazo:**
- Parches de emergencia
- Reglas de firewall adicionales
- Segmentación de red
- Monitoreo intensivo

### 6.4 Fase 4: Erradicación
- Eliminar causa raíz
- Remover malware
- Cerrar vectores de ataque
- Aplicar parches
- Fortalecer configuraciones
- Cambiar credenciales comprometidas

### 6.5 Fase 5: Recuperación
- Restaurar desde backups limpios
- Reconstruir sistemas comprometidos
- Validar integridad
- Retorno gradual a producción
- Monitoreo intensivo post-recuperación

### 6.6 Fase 6: Lecciones Aprendidas
- Reunión post-mortem (< 2 semanas)
- Documentación del incidente
- Análisis de causa raíz
- Mejoras identificadas
- Actualización de playbooks
- Capacitación derivada

## 7. Comunicación

### 7.1 Comunicación Interna
- **Alta Dirección**: Inmediato (Sev 1-2)
- **Empleados Afectados**: Según necesidad
- **Organización General**: Según impacto
- Canales: Email, Intranet, Town halls

### 7.2 Comunicación Externa
- **Clientes**: Si sus datos fueron afectados
- **Partners**: Si sus sistemas fueron impactados
- **Autoridades**: Según requisitos legales
- **Medios**: Solo si necesario, vía PR
- **Aseguradoras**: Según póliza
- Aprobación previa por Legal + PR

### 7.3 Notificación de Brechas
- Cumplir con plazos regulatorios (ej. 72h GDPR)
- Información requerida por ley
- Coordinación con autoridades
- Comunicación transparente

## 8. Forensics e Investigación

### 8.1 Preservación de Evidencia
- Chain of custody
- Imágenes forenses
- Logs relevantes
- Capturas de memoria
- Capturas de red
- Admisibilidad legal

### 8.2 Análisis Forense
- Timeline de eventos
- Alcance del compromiso
- Vectores de ataque
- Lateral movement
- Data exfiltration
- Attribution (si posible)

### 8.3 Coordinación Legal
- Asesoría legal continua
- Privilege considerations
- Reporte a autoridades
- Cooperación con investigaciones

## 9. Aspectos Legales y Regulatorios

### 9.1 Obligaciones de Notificación
- Autoridades de protección de datos
- Reguladores sectoriales
- Fuerzas del orden (si es crimen)
- Afectados (individuos/organizaciones)

### 9.2 Documentación Legal
- Incident report completo
- Evidencia preservada
- Acciones tomadas
- Timeline detallado

## 10. Gestión de Ransomware

### 10.1 Prevención
- Backups offline
- Segmentación
- Endpoint protection
- Email filtering
- Awareness training

### 10.2 Respuesta
- **NO pagar rescate** (política general)
- Aislar inmediatamente
- Identificar variante
- Verificar backups
- Recuperación de backups
- Consultar con legal y seguros

## 11. Threat Intelligence

### 11.1 Indicadores de Compromiso (IoC)
- IPs maliciosas
- Dominios
- Hashes de malware
- Patrones de ataque

### 11.2 Fuentes
- Feeds comerciales
- Open source (MISP, etc.)
- Información compartida (ISACs)
- Threat hunting interno

### 11.3 Uso
- Prevención proactiva
- Detección temprana
- Enriquecimiento de alertas
- Contexto para investigaciones

## 12. Métricas de Incidentes

### 12.1 KPIs
- Tiempo de detección (MTTD)
- Tiempo de respuesta (MTTR)
- Tiempo de contención
- Tiempo de recuperación
- Incidentes por severidad
- Falsos positivos
- Tendencias

### 12.2 Reportes
- Dashboard en tiempo real
- Reporte semanal al CISO
- Reporte mensual a dirección
- Reporte trimestral al board

## 13. Capacitación y Simulacros

### 13.1 Capacitación del CSIRT
- Capacitación técnica continua
- Certificaciones (GCIH, ECIH, etc.)
- Threat hunting
- Forensics
- Herramientas especializadas

### 13.2 Simulacros
- **Tabletop exercises**: Trimestral
- **Simulacros técnicos**: Semestral
- **Red team exercise**: Anual
- Lecciones aprendidas documentadas

## 14. Seguros Cibernéticos

### 14.1 Póliza
- Cobertura de respuesta
- Cobertura de pérdidas
- Servicios incluidos
- Exclusiones conocidas

### 14.2 Coordinación
- Notificación según póliza
- Uso de proveedores aprobados
- Documentación para reclamo`,
  },

  // ============================================
  // PROCEDIMIENTOS ADICIONALES COMPREHENSIVOS
  // ============================================

  {
    code: 'PROC-006',
    title: 'Procedimiento de Análisis de Riesgos',
    description:
      'Metodología para identificar, evaluar y tratar riesgos de seguridad',
    type: DocumentType.PROCEDURE,
    category: DocumentCategory.COMPLIANCE,
    tags: ['riesgos', 'análisis', 'evaluación'],
    content: `# Procedimiento de Análisis de Riesgos

## 1. Objetivo
Establecer una metodología sistemática para identificar, evaluar y tratar riesgos de seguridad de la información.

## 2. Alcance
Aplica a todos los activos de información y procesos de negocio.

## 3. Frecuencia
- **Análisis completo**: Anual
- **Revisión**: Trimestral
- **Ad-hoc**: Ante cambios significativos

## 4. Metodología
Se utiliza metodología basada en ISO 27005 / NIST RMF.

## 5. Proceso de Gestión de Riesgos

### 5.1 Establecimiento del Contexto
**Actividades:**
- Definir alcance del análisis
- Identificar stakeholders
- Definir criterios de aceptación de riesgo
- Identificar requisitos legales/regulatorios

**Entregable:** Documento de contexto

### 5.2 Identificación de Activos
**Clasificación de Activos:**
- **Información**: Bases de datos, documentos, archivos
- **Software**: Aplicaciones, sistemas operativos
- **Hardware**: Servidores, laptops, dispositivos
- **Servicios**: Cloud, telecomunicaciones
- **Personas**: Personal clave, conocimiento
- **Intangibles**: Reputación, propiedad intelectual

**Información por Activo:**
- Nombre y descripción
- Propietario
- Ubicación
- Valor para el negocio
- Nivel de criticidad

**Entregable:** Inventario de activos valorizado

### 5.3 Identificación de Amenazas
**Categorías de Amenazas:**

**Amenazas Naturales:**
- Terremotos, inundaciones
- Incendios
- Condiciones climáticas extremas

**Amenazas Humanas Intencionales:**
- Ciberataques (malware, ransomware, phishing)
- Hackers, APTs
- Insider threats maliciosos
- Sabotaje
- Espionaje

**Amenazas Humanas No Intencionales:**
- Errores de configuración
- Pérdida de dispositivos
- Divulgación accidental
- Errores de proceso

**Amenazas Técnicas:**
- Fallas de hardware
- Bugs de software
- Saturación de recursos
- Incompatibilidades

**Entregable:** Catálogo de amenazas aplicables

### 5.4 Identificación de Vulnerabilidades
**Tipos de Vulnerabilidades:**

**Técnicas:**
- Vulnerabilidades de software (CVEs)
- Configuraciones inseguras
- Parches faltantes
- Contraseñas débiles
- Falta de cifrado

**Organizacionales:**
- Falta de políticas
- Procesos inadecuados
- Falta de segregación de funciones
- Documentación insuficiente

**Físicas:**
- Controles de acceso físico débiles
- Falta de protección ambiental
- Cables expuestos

**Humanas:**
- Falta de capacitación
- Falta de conciencia de seguridad
- Resistencia al cambio

**Métodos de Identificación:**
- Escaneo de vulnerabilidades
- Pruebas de penetración
- Auditorías
- Revisión de configuraciones
- Entrevistas con personal

**Entregable:** Lista de vulnerabilidades identificadas

### 5.5 Evaluación de Riesgos

**5.5.1 Análisis de Riesgos**

**Probabilidad de Ocurrencia:**
- **Muy Alta (5)**: Ocurre frecuentemente (> 1/año)
- **Alta (4)**: Probable que ocurra (1 vez cada 1-2 años)
- **Media (3)**: Posible que ocurra (1 vez cada 2-5 años)
- **Baja (2)**: Poco probable (1 vez cada 5-10 años)
- **Muy Baja (1)**: Improbable (< 1 vez en 10 años)

**Impacto:**
Evaluar impacto en:
- Confidencialidad
- Integridad
- Disponibilidad
- Cumplimiento
- Reputación
- Financiero

**Escala de Impacto:**
- **Crítico (5)**: Pérdida catastrófica, amenaza existencial
- **Alto (4)**: Pérdida significativa, afecta objetivos principales
- **Medio (3)**: Pérdida moderada, objetivos parcialmente afectados
- **Bajo (2)**: Pérdida menor, impacto limitado
- **Muy Bajo (1)**: Pérdida insignificante

**Cálculo de Riesgo Inherente:**
```
Riesgo Inherente = Probabilidad × Impacto
```

**Matriz de Riesgo:**
```
Probabilidad ↑
5 | 5   10  15  20  25
4 | 4   8   12  16  20
3 | 3   6   9   12  15
2 | 2   4   6   8   10
1 | 1   2   3   4   5
  +------------------→ Impacto
    1   2   3   4   5
```

**Niveles de Riesgo:**
- **Crítico (20-25)**: Requiere acción inmediata
- **Alto (12-19)**: Requiere atención urgente
- **Medio (6-11)**: Requiere planificación de tratamiento
- **Bajo (1-5)**: Monitorear

**5.5.2 Evaluación de Controles Existentes**
- Identificar controles actuales
- Evaluar efectividad
- Determinar cobertura
- Identificar gaps

**5.5.3 Cálculo de Riesgo Residual**
```
Riesgo Residual = Riesgo Inherente - Efectividad de Controles
```

**Entregable:** Registro de riesgos con scoring

### 5.6 Tratamiento de Riesgos

**Opciones de Tratamiento:**

**5.6.1 Mitigar (Reducir)**
- Implementar controles para reducir probabilidad o impacto
- Opción más común
- Controles preventivos, detectivos o correctivos

**5.6.2 Evitar (Eliminar)**
- Discontinuar la actividad que genera el riesgo
- Cambiar procesos para eliminar la amenaza
- Opción para riesgos inaceptables sin mitigación efectiva

**5.6.3 Transferir (Compartir)**
- Seguros cibernéticos
- Outsourcing con SLAs
- Contratos con cláusulas de responsabilidad
- Opción para riesgos con impacto financiero alto

**5.6.4 Aceptar**
- Asumir el riesgo conscientemente
- Solo para riesgos bajos o con mitigación costo-prohibitivo
- Requiere aprobación de alta dirección
- Documentar justificación

**Plan de Tratamiento:**
Para cada riesgo a mitigar:
- Controles a implementar
- Responsable
- Fecha objetivo
- Presupuesto
- Prioridad
- Riesgo residual esperado

**Entregable:** Plan de tratamiento de riesgos

### 5.7 Aceptación de Riesgos

**Proceso:**
1. Riesgos residuales presentados a propietarios de activos
2. Evaluación de aceptabilidad
3. Decisión formal
4. Documentación de justificación
5. Firma de aceptación

**Criterios de Aceptación:**
- Riesgo residual < umbral definido
- Cost-benefit favorable
- Controles compensatorios en lugar
- Requisitos legales cumplidos

**Entregable:** Declaración de aplicabilidad (SoA)

## 6. Documentación

### 6.1 Registro de Riesgos
Contenido:
- ID de riesgo
- Descripción
- Activo afectado
- Amenaza
- Vulnerabilidad
- Probabilidad
- Impacto
- Riesgo inherente
- Controles existentes
- Riesgo residual
- Tratamiento
- Responsable
- Estado

### 6.2 Declaración de Aplicabilidad (SoA)
- Controles aplicables de ISO 27001 Anexo A
- Justificación de inclusión/exclusión
- Estado de implementación
- Evidencia de implementación

### 6.3 Plan de Tratamiento de Riesgos
- Lista de acciones priorizadas
- Cronograma
- Presupuesto
- Responsables

## 7. Monitoreo y Revisión

### 7.1 Monitoreo Continuo
- KRIs (Key Risk Indicators)
- Nuevas amenazas y vulnerabilidades
- Cambios en el entorno
- Efectividad de controles

### 7.2 Revisión Periódica
- **Trimestral**: Revisión de riesgos críticos y altos
- **Semestral**: Revisión de todos los riesgos
- **Anual**: Análisis completo
- **Ad-hoc**: Ante cambios significativos

### 7.3 Reporte
- **Ejecutivo**: Dashboard de riesgos top
- **Gerencial**: Riesgos por área
- **Operacional**: Plan de tratamiento
- **Auditoría**: Documentación completa

## 8. Roles y Responsabilidades

### 8.1 Comité de Riesgos
- Aprobación de metodología
- Aprobación de criterios de aceptación
- Decisión sobre riesgos críticos
- Asignación de presupuesto

### 8.2 Risk Manager / CISO
- Coordinación del proceso
- Facilitación de talleres
- Consolidación de información
- Reporte

### 8.3 Propietarios de Activos
- Valoración de activos
- Identificación de amenazas específicas
- Decisión de tratamiento
- Aceptación de riesgos

### 8.4 Expertos Técnicos
- Identificación de vulnerabilidades
- Evaluación de controles
- Diseño de mitigaciones

## 9. Herramientas

### 9.1 GRC Platform
- Gestión del registro de riesgos
- Workflows de aprobación
- Dashboards
- Reportes automatizados

### 9.2 Herramientas de Evaluación
- Vulnerability scanners
- Penetration testing tools
- Configuration assessment
- Threat intelligence platforms

## 10. Integración con Otros Procesos
- Gestión de cambios
- Gestión de incidentes
- Auditoría interna
- Continuidad del negocio
- Adquisiciones (third-party risk)`,
  },

  {
    code: 'PROC-007',
    title: 'Procedimiento de Monitoreo y Revisión de Seguridad',
    description:
      'Proceso continuo de monitoreo de controles y revisión de efectividad',
    type: DocumentType.PROCEDURE,
    category: DocumentCategory.COMPLIANCE,
    tags: ['monitoreo', 'revisión', 'controles', 'auditoría'],
    content: `# Procedimiento de Monitoreo y Revisión de Seguridad

## 1. Objetivo
Establecer un proceso continuo para monitorear controles de seguridad y revisar su efectividad.

## 2. Alcance
Aplica a todos los controles de seguridad implementados en la organización.

## 3. Principios
- Monitoreo continuo
- Evidencia objetiva
- Mejora continua
- Visibilidad en tiempo real

## 4. Tipos de Monitoreo

### 4.1 Monitoreo Técnico Automatizado
**Herramientas:**
- SIEM (Security Information and Event Management)
- Vulnerability scanners
- Configuration management databases
- Log management platforms
- Security orchestration (SOAR)

**Eventos Monitoreados:**
- Intentos de acceso
- Cambios de configuración
- Alertas de seguridad
- Vulnerabilidades
- Cumplimiento de baselines

**Frecuencia:** Continuo 24/7

### 4.2 Revisiones Manuales
**Actividades:**
- Revisión de logs
- Análisis de reportes
- Validación de controles
- Entrevistas
- Observación directa

**Frecuencia:** Según calendario definido

### 4.3 Auditorías
**Tipos:**
- Auditorías internas
- Auditorías de certificación
- Auditorías de terceros
- Auto-evaluaciones

**Frecuencia:**
- Auditoría interna: Anual mínimo
- Certificación: Según esquema
- Auto-evaluación: Trimestral

## 5. Controles a Monitorear

### 5.1 Controles Técnicos

**Control de Acceso:**
- Revisión de usuarios activos
- Cuentas inactivas
- Cuentas con privilegios
- Accesos remotos
- Último inicio de sesión
- Cambios de permisos

**Frecuencia:** Semanal automatizado, mensual manual

**Cifrado:**
- Cobertura de cifrado
- Fortaleza de algoritmos
- Vencimiento de certificados
- Uso de protocolos seguros

**Frecuencia:** Diario automatizado

**Parches y Vulnerabilidades:**
- Estado de parches
- Vulnerabilidades pendientes
- Cumplimiento de SLA de remediación
- Sistemas sin actualizar

**Frecuencia:** Diario

**Antimalware:**
- Estado de protección endpoints
- Actualizaciones de firmas
- Detecciones y remediaciones
- Cobertura

**Frecuencia:** Continuo

**Backups:**
- Éxito de backups programados
- Pruebas de restauración
- Cobertura de activos críticos
- Ubicación offsite

**Frecuencia:** Diario

**Configuraciones de Seguridad:**
- Compliance con baselines
- Servicios innecesarios habilitados
- Configuraciones por defecto
- Hardening

**Frecuencia:** Semanal

### 5.2 Controles Físicos

**Acceso Físico:**
- Eventos de acceso
- Intentos denegados
- Puertas abiertas fuera de horario
- Visitantes

**Frecuencia:** Diario

**Controles Ambientales:**
- Temperatura y humedad
- Sistemas de supresión de incendios
- UPS y generadores
- Fugas de agua

**Frecuencia:** Continuo

### 5.3 Controles Administrativos

**Capacitación:**
- Porcentaje de completitud
- Resultados de evaluaciones
- Campañas de phishing

**Frecuencia:** Mensual

**Gestión de Incidentes:**
- Incidentes abiertos
- Tiempo de resolución
- Incidentes recurrentes
- Tendencias

**Frecuencia:** Semanal

**Cumplimiento de Políticas:**
- Violaciones reportadas
- Excepciones activas
- Revisiones vencidas

**Frecuencia:** Mensual

## 6. Métricas e Indicadores

### 6.1 KPIs de Seguridad

**Disponibilidad:**
- Uptime de sistemas críticos
- Tiempo de inactividad
- MTBF (Mean Time Between Failures)
- MTTR (Mean Time To Repair)

**Meta:** 99.9% uptime

**Gestión de Vulnerabilidades:**
- Número de vulnerabilidades por severidad
- % de vulnerabilidades remediadas dentro de SLA
- Edad promedio de vulnerabilidades abiertas
- Tendencia de nuevas vulnerabilidades

**Meta:**
- Críticas: 100% en < 24h
- Altas: 95% en < 7 días
- Medias: 90% en < 30 días

**Gestión de Accesos:**
- % de cuentas con MFA habilitado
- % de accesos revisados en período
- Número de accesos excesivos identificados
- Tiempo promedio de provisioning

**Meta:** 100% MFA en cuentas críticas

**Incidentes de Seguridad:**
- Número de incidentes por severidad
- Tiempo medio de detección (MTTD)
- Tiempo medio de respuesta (MTTR)
- Incidentes recurrentes

**Meta:** MTTD < 1 hora, MTTR < 4 horas

**Capacitación:**
- % de empleados capacitados
- Tasa de clics en simulacros de phishing
- Resultado promedio en evaluaciones

**Meta:** 100% capacitados, < 5% clics phishing

**Cumplimiento:**
- % de controles implementados
- % de políticas revisadas en período
- Hallazgos de auditoría abiertos
- Edad de hallazgos

**Meta:** 100% controles, 0 hallazgos críticos abiertos

### 6.2 KRIs (Key Risk Indicators)
- Aumento en intentos de acceso no autorizado
- Incremento en malware detectado
- Aumento de vulnerabilidades críticas
- Reducción en tasa de parches
- Aumento en tiempo de respuesta a incidentes
- Rotación de personal de seguridad
- Aumento de excepciones de seguridad

## 7. Dashboards y Reportes

### 7.1 Dashboard en Tiempo Real
**Audiencia:** SOC, Equipo de Seguridad

**Contenido:**
- Alertas activas
- Incidentes abiertos
- Estado de sistemas críticos
- Eventos de seguridad recientes
- Amenazas en tiempo real

**Herramienta:** SIEM dashboard

### 7.2 Reporte Semanal Operacional
**Audiencia:** Gerente de TI, CISO

**Contenido:**
- Incidentes de la semana
- Vulnerabilidades críticas
- Estado de remediaciones
- Cambios de seguridad
- Excepciones nuevas
- Acciones requeridas

### 7.3 Reporte Mensual Táctico
**Audiencia:** Gerencia, CISO

**Contenido:**
- KPIs del mes
- Tendencias
- Proyectos de seguridad
- Cumplimiento de plan de tratamiento de riesgos
- Hallazgos de revisiones
- Recomendaciones

### 7.4 Reporte Trimestral Estratégico
**Audiencia:** Alta Dirección, Board

**Contenido:**
- Postura de seguridad general
- Progreso en iniciativas estratégicas
- Riesgos principales
- Benchmarking con industria
- ROI de inversiones en seguridad
- Roadmap

### 7.5 Reporte Anual de Auditoría
**Audiencia:** Auditoría, Certificación

**Contenido:**
- Evidencia de todos los controles
- Resultados de revisiones
- Incidentes del año
- Mejoras implementadas
- No conformidades y su remediación

## 8. Proceso de Revisión

### 8.1 Revisión de Controles

**8.1.1 Preparación**
- Identificar controles a revisar
- Preparar criterios de evaluación
- Asignar revisor
- Notificar a propietarios de controles
- Recopilar documentación

**8.1.2 Ejecución**
- Revisión de documentación
- Entrevistas
- Observación de procesos
- Pruebas de controles
- Sampling de evidencia

**8.1.3 Evaluación**
- Efectividad del control
- Cumplimiento con política
- Adecuación del diseño
- Eficiencia operativa

**Escala de Efectividad:**
- **Efectivo**: Control funciona según diseño, sin excepciones
- **Efectivo con observaciones**: Control funciona, mejoras menores identificadas
- **Parcialmente efectivo**: Control funciona parcialmente, mejoras requeridas
- **Inefectivo**: Control no funciona, requiere rediseño

**8.1.4 Reporte**
- Resumen ejecutivo
- Hallazgos por control
- Clasificación de hallazgos
- Recomendaciones
- Plan de acción

**8.1.5 Seguimiento**
- Tracking de remediciones
- Validación de implementación
- Cierre de hallazgos

### 8.2 Calendario de Revisiones

**Diarias:**
- Monitoreo de alertas SIEM
- Estado de backups
- Vulnerabilidades críticas nuevas

**Semanales:**
- Incidentes de seguridad
- Compliance con baselines
- Accesos privilegiados

**Mensuales:**
- Revisión de usuarios y accesos
- Capacitación de seguridad
- Excepciones y desviaciones
- Parches pendientes

**Trimestrales:**
- Auto-evaluación de controles
- Revisión de riesgos
- Métricas de seguridad
- Revisión de proveedores críticos

**Anuales:**
- Auditoría interna completa
- Revisión de políticas
- Análisis de riesgos
- Revisión de BCP/DR
- Assessment de madurez

## 9. Gestión de Hallazgos

### 9.1 Clasificación de Hallazgos
- **Crítico**: Exposición inmediata a riesgo severo
- **Alto**: Riesgo significativo, requiere atención urgente
- **Medio**: Mejora necesaria, planificar remediación
- **Bajo**: Mejora sugerida, oportunidad de optimización

### 9.2 Registro de Hallazgos
- ID único
- Descripción del hallazgo
- Control afectado
- Clasificación
- Riesgo asociado
- Recomendación
- Responsable de remediación
- Fecha objetivo
- Estado

### 9.3 Plan de Acción Correctiva
- Acción específica
- Responsable
- Recursos necesarios
- Fecha compromiso
- Dependencias
- Validación

### 9.4 Seguimiento
- Tracking semanal de hallazgos abiertos
- Escalamiento de vencidos
- Validación de cierre
- Reporte a dirección

## 10. Mejora Continua

### 10.1 Análisis de Tendencias
- Identificar patrones
- Controles problemáticos recurrentes
- Áreas de oportunidad
- Benchmarking

### 10.2 Optimización de Controles
- Automatización de controles manuales
- Consolidación de controles redundantes
- Eliminación de controles obsoletos
- Mejora de eficiencia

### 10.3 Actualización de Controles
- Nuevas amenazas
- Cambios tecnológicos
- Evolución de mejores prácticas
- Requisitos regulatorios nuevos

## 11. Herramientas

### 11.1 GRC Platform
- Gestión de controles
- Tracking de revisiones
- Gestión de hallazgos
- Reportes

### 11.2 Monitoreo
- SIEM
- Vulnerability management
- Configuration management
- Log aggregation

### 11.3 Evidencia
- Screenshot automation
- Audit trail collection
- Document repository

## 12. Roles y Responsabilidades

### 12.1 Propietarios de Controles
- Diseño del control
- Implementación
- Mantenimiento
- Provisión de evidencia

### 12.2 Auditores Internos
- Planificación de auditorías
- Ejecución de revisiones
- Reporte de hallazgos
- Seguimiento

### 12.3 CISO / Risk Manager
- Supervisión del programa
- Reporte a dirección
- Decisión sobre hallazgos
- Asignación de recursos`,
  },
];
