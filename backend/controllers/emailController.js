const emails = [
    {
      id: 1,
      sender: "support@paypal.com",
      subject: "Confirmación de transacción reciente - PayPal",
      date: "2025-03-20 10:15:32",
      body: "Estimado cliente,\n\nHemos procesado un pago de $75.32 USD realizado el 19 de marzo de 2025 a 'TechGadgets Ltd.' desde su cuenta PayPal. Si reconoce esta transacción, no es necesario que haga nada. De lo contrario, le recomendamos revisar su actividad reciente y contactar a nuestro equipo de soporte en un plazo de 48 horas para evitar posibles cargos adicionales.\n\nDetalles del pago:\n- ID de transacción: PPX-789456123\n- Método: Tarjeta Visa terminada en 4321\n- Fecha: 19/03/2025 14:23:10\n\nPuede ver más detalles o administrar su cuenta aquí: https://www.paypal.com/activity/id/PPX-789456123\n\nGracias por elegir PayPal,\nEquipo de Soporte al Cliente",
      links: ["https://www.paypal.com/activity/id/PPX-789456123"],
      isPhishing: false,
      explanation: "El dominio 'paypal.com' es legítimo, y el enlace coincide con la estructura oficial de PayPal."
    },
    {
      id: 2,
      sender: "billing@netflіx.com",
      subject: "Problema con su método de pago - Acción requerida",
      date: "2025-03-19 14:23:10",
      body: "Estimado suscriptor,\n\nHemos intentado procesar el pago de su suscripción mensual a Netflix por $15.99 USD, pero su tarjeta registrada (terminada en 9876) fue rechazada por fondos insuficientes. Para evitar la suspensión de su cuenta, le solicitamos actualizar su método de pago antes del 25 de marzo de 2025.\n\nPasos para resolverlo:\n1. Inicie sesión en su cuenta.\n2. Diríjase a la sección 'Cuenta'.\n3. Actualice su información de pago.\n\nHaga clic aquí para proceder: http://netflіx.com/update-payment-info\n\nSi ya ha actualizado su información, ignore este mensaje. Si tiene preguntas, contáctenos en support@netflіx.com.\n\nSaludos,\nEquipo de Facturación de Netflix",
      links: ["http://netflіx.com/update-payment-info"],
      isPhishing: true,
      explanation: "El dominio 'netflіx.com' usa una 'і' (letra cirílica) en lugar de una 'i' latina. El verdadero dominio es 'netflix.com'. Además, el enlace no apunta al sitio oficial."
    },
    {
      id: 3,
      sender: "no-reply@amazon.co.uk",
      subject: "Actualización de su pedido #UK-456789123",
      date: "2025-03-21 09:05:47",
      body: "Hola,\n\nGracias por comprar en Amazon.co.uk. Su pedido #UK-456789123, que incluye 'Auriculares Bose QuietComfort 45', ha sido enviado con éxito. La entrega está programada para el 24 de marzo de 2025 a través de Royal Mail.\n\nDetalles del envío:\n- Artículo: Auriculares Bose QuietComfort 45\n- Cantidad: 1\n- Precio: £249.99\n- Dirección: 123 High Street, London, SW1A 1AA\n\nPuede rastrear su paquete aquí: https://www.amazon.co.uk/track-order/UK-456789123\n\nSi necesita asistencia, contáctenos en support@amazon.co.uk.\n\nSaludos,\nEquipo de Amazon UK",
      links: ["https://www.amazon.co.uk/track-order/UK-456789123"],
      isPhishing: false,
      explanation: "El dominio 'amazon.co.uk' es legítimo, y el enlace sigue la estructura oficial de Amazon."
    },
    {
      id: 4,
      sender: "security-alerts@bаnkofamerica.com",
      subject: "Acceso no autorizado detectado en su cuenta",
      date: "2025-03-18 16:45:22",
      body: "Estimado cliente,\n\nNuestro sistema de seguridad ha detectado tres intentos fallidos de inicio de sesión en su cuenta desde una dirección IP desconocida (192.168.1.100) en las últimas 24 horas. Para proteger sus fondos, hemos restringido temporalmente el acceso a su cuenta en línea.\n\nPara restaurar el acceso:\n1. Verifique su identidad.\n2. Actualice su contraseña.\n\nHaga clic aquí para proceder: http://bаnkofamerica.com/security-verification\n\nSi no realiza esta acción antes del 20 de marzo de 2025, su cuenta podría permanecer bloqueada. Contáctenos al 1-800-123-4567 si tiene dudas.\n\nAtentamente,\nEquipo de Seguridad de Bank of America",
      links: ["http://bаnkofamerica.com/security-verification"],
      isPhishing: true,
      explanation: "El dominio 'bаnkofamerica.com' usa una 'а' cirílica en lugar de una 'a' latina. El dominio oficial es 'bankofamerica.com'."
    },
    {
      id: 5,
      sender: "service@appleid.apple.com",
      subject: "Solicitud de restablecimiento de contraseña recibida",
      date: "2025-03-22 11:30:15",
      body: "Hola,\n\nHemos recibido una solicitud para restablecer la contraseña de su Apple ID asociado con este correo electrónico. Si usted inició esta solicitud, por favor haga clic en el siguiente enlace para completar el proceso:\n\nhttps://appleid.apple.com/reset-password/abc123xyz\n\nSi no reconoce esta solicitud, le recomendamos asegurar su cuenta habilitando la autenticación de dos factores y revisando los dispositivos conectados. Para más información, visite nuestro soporte en https://support.apple.com.\n\nSaludos,\nEquipo de Apple",
      links: ["https://appleid.apple.com/reset-password/abc123xyz"],
      isPhishing: false,
      explanation: "El dominio 'appleid.apple.com' es legítimo, y el enlace es consistente con los servicios de Apple."
    },
    {
      id: 6,
      sender: "billing@mіcrosoft365.com",
      subject: "Aviso: Su suscripción a Microsoft 365 está por vencer",
      date: "2025-03-23 13:12:09",
      body: "Estimado usuario,\n\nSu suscripción a Microsoft 365 Personal vencerá el 30 de marzo de 2025. Para continuar disfrutando de Word, Excel, PowerPoint y 1 TB de almacenamiento en OneDrive, renueve su plan por $69.99 USD anuales.\n\nDetalles de la suscripción:\n- Plan: Microsoft 365 Personal\n- Fecha de vencimiento: 30/03/2025\n- Método de pago actual: Tarjeta terminada en 5678\n\nRenueve ahora para evitar interrupciones: http://mіcrosoft365.com/renewal\n\nSi tiene preguntas, contáctenos en support@mіcrosoft365.com.\n\nSaludos,\nEquipo de Facturación de Microsoft",
      links: ["http://mіcrosoft365.com/renewal"],
      isPhishing: true,
      explanation: "El dominio 'mіcrosoft365.com' usa una 'і' cirílica. El dominio oficial sería 'microsoft.com'."
    },
    {
      id: 7,
      sender: "noreply@github.com",
      subject: "Actualización en su repositorio 'DeceptiMail'",
      date: "2025-03-24 15:45:00",
      body: "Hola,\n\nSe ha realizado una nueva acción en su repositorio 'DeceptiMail'. El usuario @devcontributor ha abierto un pull request (#42) con las siguientes mejoras:\n- Corrección de errores en el frontend\n- Nuevos estilos CSS\n\nRevise los cambios y apruebe o comente aquí: https://github.com/yourusername/DeceptiMail/pull/42\n\nSi no desea recibir más notificaciones de este repositorio, ajuste sus preferencias en la configuración de GitHub.\n\nSaludos,\nEquipo de GitHub",
      links: ["https://github.com/yourusername/DeceptiMail/pull/42"],
      isPhishing: false,
      explanation: "El dominio 'github.com' es legítimo, y el enlace es coherente con la plataforma."
    },
    {
      id: 8,
      sender: "alerts@chаse.com",
      subject: "Urgente: Inicio de sesión sospechoso en su cuenta",
      date: "2025-03-25 08:30:22",
      body: "Estimado cliente,\n\nHemos detectado un intento de inicio de sesión desde un dispositivo no reconocido en Miami, FL, el 24 de marzo de 2025 a las 07:15 AM EST. Si no fue usted, le recomendamos tomar medidas inmediatas para asegurar su cuenta.\n\nAcción requerida:\n1. Inicie sesión en su cuenta.\n2. Revise la actividad reciente.\n3. Cambie su contraseña.\n\nHaga clic aquí para proceder: http://chаse.com/security-login\n\nSi necesita asistencia, llame al 1-800-CHA-SE12.\n\nAtentamente,\nEquipo de Seguridad de Chase",
      links: ["http://chаse.com/security-login"],
      isPhishing: true,
      explanation: "El dominio 'chаse.com' usa una 'а' cirílica. El dominio oficial es 'chase.com'."
    },
    {
      id: 9,
      sender: "support@zoom.us",
      subject: "Invitación a reunión: Revisión de proyecto Q1",
      date: "2025-03-26 10:10:10",
      body: "Hola,\n\nHa sido invitado a una reunión de Zoom con el equipo de desarrollo para discutir el progreso del proyecto Q1. Detalles:\n- Fecha: 27 de marzo de 2025\n- Hora: 10:00 AM PST\n- Duración: 1 hora\n\nÚnase a la reunión aquí: https://zoom.us/j/9876543210?pwd=abc123\n\nAsegúrese de probar su audio y video antes de la reunión. Si no puede asistir, notifique al organizador en team@company.com.\n\nSaludos,\nEquipo de Zoom",
      links: ["https://zoom.us/j/9876543210?pwd=abc123"],
      isPhishing: false,
      explanation: "El dominio 'zoom.us' es legítimo, y el formato del enlace es estándar para reuniones de Zoom."
    },
    {
      id: 10,
      sender: "billing@аdobe.com",
      subject: "Confirmación de renovación automática",
      date: "2025-03-27 12:00:00",
      body: "Estimado cliente,\n\nSu suscripción a Adobe Creative Cloud (Plan Fotografía) se renovará automáticamente el 3 de abril de 2025 por $119.88 USD anuales. Este plan incluye Photoshop, Lightroom y 20 GB de almacenamiento en la nube.\n\nDetalles de la renovación:\n- Fecha: 03/04/2025\n- Método de pago: Tarjeta terminada en 3456\n\nSi desea cancelar o modificar su suscripción, haga clic aquí antes de la fecha de renovación: http://аdobe.com/manage-subscription\n\nGracias por su confianza,\nEquipo de Adobe",
      links: ["http://аdobe.com/manage-subscription"],
      isPhishing: true,
      explanation: "El dominio 'аdobe.com' usa una 'а' cirílica. El dominio oficial es 'adobe.com'."
    },
    {
      id: 11,
      sender: "notifications@linkedin.com",
      subject: "Nueva solicitud de conexión",
      date: "2025-03-28 09:15:00",
      body: "Hola,\n\nMaría González, Gerente de Proyectos en TechCorp, desea conectarse con usted en LinkedIn. Ella menciona que trabajaron juntos en un proyecto en 2023 y le gustaría discutir oportunidades de colaboración.\n\nPuede aceptar o ignorar la solicitud aquí: https://www.linkedin.com/invite/accept/123456789\n\nSi no conoce a esta persona, le recomendamos revisar su perfil antes de responder.\n\nSaludos,\nEquipo de LinkedIn",
      links: ["https://www.linkedin.com/invite/accept/123456789"],
      isPhishing: false,
      explanation: "El dominio 'linkedin.com' es legítimo, y el enlace sigue la estructura oficial."
    },
    {
      id: 12,
      sender: "security@gmаil.com",
      subject: "Alerta: Nuevo inicio de sesión en su cuenta",
      date: "2025-03-29 14:30:45",
      body: "Estimado usuario,\n\nDetectamos un nuevo inicio de sesión en su cuenta de Gmail desde un dispositivo Windows en São Paulo, Brasil, el 29 de marzo de 2025 a las 13:45 GMT. Si no fue usted, le recomendamos:\n1. Revisar la actividad reciente.\n2. Cambiar su contraseña.\n3. Activar la verificación en dos pasos.\n\nVerifique los detalles aquí: http://gmаil.com/account-security\n\nSi reconoce este inicio de sesión, ignore este mensaje.\n\nSaludos,\nEquipo de Seguridad de Google",
      links: ["http://gmаil.com/account-security"],
      isPhishing: true,
      explanation: "El dominio 'gmаil.com' usa una 'а' cirílica. El dominio oficial es 'gmail.com'."
    },
    {
      id: 13,
      sender: "support@dropbox.com",
      subject: "Su almacenamiento está casi lleno",
      date: "2025-03-30 11:00:00",
      body: "Hola,\n\nSu cuenta de Dropbox ha alcanzado el 90% de su capacidad (1.8 GB de 2 GB). Para evitar interrupciones, considere eliminar archivos innecesarios o actualizar a un plan superior.\n\nOpciones disponibles:\n- Dropbox Plus: 2 TB por $9.99/mes\n- Dropbox Business: 5 TB por $15/mes\n\nAdministre su almacenamiento aquí: https://www.dropbox.com/account/storage\n\nSi necesita ayuda, contáctenos en support@dropbox.com.\n\nSaludos,\nEquipo de Dropbox",
      links: ["https://www.dropbox.com/account/storage"],
      isPhishing: false,
      explanation: "El dominio 'dropbox.com' es legítimo, y el enlace es consistente."
    },
    {
      id: 14,
      sender: "alerts@wellsfаrgo.com",
      subject: "Notificación de transferencia sospechosa",
      date: "2025-03-31 08:45:12",
      body: "Estimado cliente,\n\nHemos detectado una transferencia de $1,200 USD a una cuenta desconocida el 30 de marzo de 2025 a las 16:30 PST. Si no autorizó esta transacción, por favor verifique su cuenta inmediatamente.\n\nDetalles:\n- Monto: $1,200 USD\n- Destinatario: Cuenta terminada en 8901\n- ID de transacción: WF-456789123\n\nHaga clic aquí para revisar y reportar: http://wellsfаrgo.com/transaction-review\n\nContáctenos al 1-800-555-1234 si necesita asistencia.\n\nSaludos,\nEquipo de Wells Fargo",
      links: ["http://wellsfаrgo.com/transaction-review"],
      isPhishing: true,
      explanation: "El dominio 'wellsfаrgo.com' usa una 'а' cirílica. El dominio oficial es 'wellsfargo.com'."
    },
    {
      id: 15,
      sender: "no-reply@spotify.com",
      subject: "Resumen mensual de tu cuenta",
      date: "2025-04-01 10:20:33",
      body: "Hola,\n\nAquí está su resumen de marzo 2025 en Spotify:\n- Canciones escuchadas: 245\n- Artista más escuchado: The Weeknd\n- Género favorito: Pop\n\nDescubra más estadísticas y listas personalizadas aquí: https://www.spotify.com/monthly-summary/2025-03\n\nGracias por ser parte de Spotify,\nEquipo de Spotify",
      links: ["https://www.spotify.com/monthly-summary/2025-03"],
      isPhishing: false,
      explanation: "El dominio 'spotify.com' es legítimo, y el enlace es coherente."
    },
    {
      id: 16,
      sender: "support@pаypal.com",
      subject: "Verificación de cuenta urgente",
      date: "2025-04-02 13:15:00",
      body: "Estimado usuario,\n\nDebido a cambios en nuestras políticas de seguridad, requerimos que todos los usuarios verifiquen su identidad antes del 5 de abril de 2025. Si no completa este proceso, su cuenta podría ser suspendida.\n\nPasos:\n1. Inicie sesión en su cuenta.\n2. Suba una identificación válida.\n\nComience aquí: http://pаypal.com/verify-id\n\nSi tiene preguntas, contáctenos en support@pаypal.com.\n\nSaludos,\nEquipo de PayPal",
      links: ["http://pаypal.com/verify-id"],
      isPhishing: true,
      explanation: "El dominio 'pаypal.com' usa una 'а' cirílica. El dominio oficial es 'paypal.com'."
    },
    {
      id: 17,
      sender: "notifications@slack.com",
      subject: "Nuevo mensaje en #general",
      date: "2025-04-03 09:30:00",
      body: "Hola,\n\nTienes un nuevo mensaje en tu espacio de trabajo 'DeceptiMail Team' en el canal #general:\n\n'@everyone: Reunión de emergencia hoy a las 2 PM PST para discutir el lanzamiento.'\n\nResponda o únase a la conversación aquí: https://slack.com/workspace/deceptimail/general/123456789\n\nSaludos,\nEquipo de Slack",
      links: ["https://slack.com/workspace/deceptimail/general/123456789"],
      isPhishing: false,
      explanation: "El dominio 'slack.com' es legítimo, y el enlace sigue la estructura oficial."
    },
    {
      id: 18,
      sender: "billing@amаzon.com",
      subject: "Confirmación de compra reciente",
      date: "2025-04-04 15:00:22",
      body: "Estimado cliente,\n\nHemos procesado su pedido #US-789123456 por un total de $599.99 USD, que incluye una 'MacBook Air M2'. La transacción se cargó a su tarjeta terminada en 4321 el 3 de abril de 2025.\n\nDetalles del pedido:\n- Artículo: MacBook Air M2 (13 pulgadas, 256 GB)\n- Fecha de entrega estimada: 7 de abril de 2025\n\nRevise su pedido aquí: http://amаzon.com/order-details/US-789123456\n\nSi no reconoce esta compra, contáctenos inmediatamente.\n\nSaludos,\nEquipo de Amazon",
      links: ["http://amаzon.com/order-details/US-789123456"],
      isPhishing: true,
      explanation: "El dominio 'amаzon.com' usa una 'а' cirílica. El dominio oficial es 'amazon.com'."
    },
    {
      id: 19,
      sender: "support@trello.com",
      subject: "Actualización en su tablero 'Proyecto Q2'",
      date: "2025-04-05 11:45:00",
      body: "Hola,\n\nSe ha añadido una nueva tarjeta al tablero 'Proyecto Q2' en su espacio de trabajo 'DeceptiMail Dev'. Detalles:\n- Tarjeta: 'Revisión de diseño UI'\n- Asignada a: usted\n- Fecha límite: 10 de abril de 2025\n\nVea los detalles y actualice el estado aquí: https://trello.com/b/abc123xyz/project-q2\n\nSaludos,\nEquipo de Trello",
      links: ["https://trello.com/b/abc123xyz/project-q2"],
      isPhishing: false,
      explanation: "El dominio 'trello.com' es legítimo, y el enlace es consistente."
    },
    {
      id: 20,
      sender: "alerts@chаrles-schwab.com",
      subject: "Actividad inusual en su cuenta de inversión",
      date: "2025-04-06 08:15:33",
      body: "Estimado cliente,\n\nHemos detectado una orden de venta de 50 acciones de AAPL por $8,750 USD en su cuenta el 5 de abril de 2025 a las 14:00 EST. Si no autorizó esta transacción, por favor revise su cuenta inmediatamente.\n\nDetalles:\n- Símbolo: AAPL\n- Cantidad: 50\n- Monto: $8,750 USD\n\nVerifique aquí: http://chаrles-schwab.com/account-activity\n\nContáctenos al 1-800-435-4000 si necesita asistencia.\n\nSaludos,\nEquipo de Charles Schwab",
      links: ["http://chаrles-schwab.com/account-activity"],
      isPhishing: true,
      explanation: "El dominio 'chаrles-schwab.com' usa una 'а' cirílica. El dominio oficial es 'charles-schwab.com'."
    },
    {
      id: 21,
      sender: "no-reply@facebook.com",
      subject: "Cambio en la configuración de su cuenta",
      date: "2025-04-07 10:00:00",
      body: "Hola,\n\nHemos registrado un cambio en la dirección de correo electrónico asociada con su cuenta de Facebook el 6 de abril de 2025 a las 09:45 GMT. Nueva dirección: user@example.com.\n\nSi realizó este cambio, ignore este mensaje. De lo contrario, asegure su cuenta aquí: https://www.facebook.com/security/check/123456789\n\nSaludos,\nEquipo de Facebook",
      links: ["https://www.facebook.com/security/check/123456789"],
      isPhishing: false,
      explanation: "El dominio 'facebook.com' es legítimo, y el enlace es coherente."
    },
    {
      id: 22,
      sender: "support@gоogle.com",
      subject: "Revisión de seguridad recomendada",
      date: "2025-04-08 13:30:00",
      body: "Estimado usuario,\n\nHemos notado actividad inusual en su cuenta de Google, incluyendo múltiples intentos de inicio de sesión desde una ubicación desconocida. Le recomendamos realizar una revisión de seguridad para proteger su información.\n\nPasos sugeridos:\n1. Verifique los dispositivos conectados.\n2. Actualice su contraseña.\n\nComience aquí: http://gоogle.com/security-checkup\n\nSi tiene dudas, contáctenos en support@gоogle.com.\n\nSaludos,\nEquipo de Google",
      links: ["http://gоogle.com/security-checkup"],
      isPhishing: true,
      explanation: "El dominio 'gоogle.com' usa una 'о' cirílica. El dominio oficial es 'google.com'."
    },
    {
      id: 23,
      sender: "notifications@twitter.com",
      subject: "Nuevo inicio de sesión en su cuenta",
      date: "2025-04-09 09:15:00",
      body: "Hola,\n\nHemos detectado un nuevo inicio de sesión en su cuenta @username desde un dispositivo iPhone en Los Ángeles, CA, el 8 de abril de 2025 a las 08:00 PST. Si fue usted, ignore este mensaje.\n\nDe lo contrario, revise la actividad aquí: https://twitter.com/account/activity/123456789\n\nSaludos,\nEquipo de Twitter",
      links: ["https://twitter.com/account/activity/123456789"],
      isPhishing: false,
      explanation: "El dominio 'twitter.com' es legítimo, y el enlace es consistente."
    },
    {
      id: 24,
      sender: "billing@ubеr.com",
      subject: "Recibo de su último viaje",
      date: "2025-04-10 14:00:00",
      body: "Estimado cliente,\n\nGracias por usar Uber. Aquí está el recibo de su viaje del 9 de abril de 2025:\n- Origen: 456 Main St, San Francisco, CA\n- Destino: 789 Oak Ave, San Francisco, CA\n- Monto: $12.45 USD\n- Método de pago: Tarjeta terminada en 6789\n\nSi no reconoce este viaje, reporte el problema aquí: http://ubеr.com/trip-details/987654321\n\nSaludos,\nEquipo de Uber",
      links: ["http://ubеr.com/trip-details/987654321"],
      isPhishing: true,
      explanation: "El dominio 'ubеr.com' usa una 'е' cirílica. El dominio oficial es 'uber.com'."
    },
    {
      id: 25,
      sender: "support@discord.com",
      subject: "Invitación a un nuevo servidor",
      date: "2025-04-11 11:30:00",
      body: "Hola,\n\nHa sido invitado a unirse al servidor 'CyberSec Community' en Discord por @adminuser. Este servidor está dedicado a entusiastas de la ciberseguridad y ofrece canales para charlas, talleres y más.\n\nÚnase aquí: https://discord.com/invite/abc123xyz\n\nSi no desea unirse, ignore este mensaje.\n\nSaludos,\nEquipo de Discord",
      links: ["https://discord.com/invite/abc123xyz"],
      isPhishing: false,
      explanation: "El dominio 'discord.com' es legítimo, y el enlace sigue el formato oficial de invitaciones."
    }
  ];
  
  module.exports = {
    getEmails: (req, res) => res.json(emails),
    checkAnswer: (req, res) => {
      const { emailId, userAnswer } = req.body;
      const email = emails.find(e => e.id === emailId);
      if (!email) return res.status(404).json({ error: 'Email not found' });
      const isCorrect = email.isPhishing === userAnswer;
      res.json({ isCorrect, explanation: email.explanation });
    }
  };