export const t = (text: string, lang: string): string => {
  if (lang === 'en') {
    return dictEn[text] || text;
  }
  return dictFa[text] || text;
};

const dictEn: Record<string, string> = {
  // New Header info
  "SYS_LABEL": "[!] QUALITY CONTROL SYSTEM",
  "SYS_STATUS": "REGISTER ADDR_0x00 ONLINE",
  
  "HERO_TITLE": "Designing Safe and Precise Electronic Boards for Sensitive Medical & Laboratory Equipment",
  "HERO_DESC": "With over 20 years of experience (since 2003), the Nexora team specializes in designing and manufacturing multi-layer controller boards for medical and laboratory equipment manufacturers. By utilizing the Rust programming language and ARM microcontrollers, we guarantee global-level stability, safety, and precision for your devices.",
  
  "LABEL_THERM": "PRECISE TEMP CONTROLLER",
  "VAL_THERM": "0.01°C ACCURACY",
  "DESC_THERM": "> Ovens, Incubators, Autoclaves",
  
  "LABEL_VELOCITY": "SMART MOTOR DRIVE",
  "VAL_VELOCITY": "SENSORLESS FOC CONTROL",
  "DESC_VELOCITY": "> Lab Mixers and Rotators",
  
  "LABEL_ISO": "SAFE ISOLATION",
  "VAL_ISO": "FULL GALVANIC ISOLATION",
  "DESC_ISO": "> Compliant with IEC 60601",
  
  "ABOUT_TITLE": "Why the Rust Programming Language?",
  "ABOUT_P1": "In sensitive equipment like cell culture incubators or medical autoclaves, even the slightest software error can be catastrophic. Temperature fluctuations or sudden motor stops incur heavy costs.",
  "ABOUT_P2": "At Nexora, we use the Rust programming language at the hardware (Bare-Metal) level. This language inherently prevents common C/C++ errors such as memory leaks and unauthorized access.",
  "ABOUT_P3": "The result is systems that never crash, are extremely fast, and have compile-time guaranteed safety.",
  "COMM_TITLE": "Nexora Technical Commitments:",
  "COMM_1": "Guaranteed Real-Time performance without unpredictable delays.",
  "COMM_2": "High-level Safety (Safety-Critical) with Memory-Safe features in Rust.",
  "COMM_3": "Support for industrial and medical protocols (Modbus, RS485, CAN).",
  "TEAM_TITLE": "Expert Research & Development (R&D) Team",
  "TEAM_DESC": "Our team consists of veteran electronics and embedded software engineers who have been developing cutting-edge technologies in the Iranian medical equipment industry since 2003.",
  
  "BTN_ABOUT": "About Us",
  "BTN_PROD": "Products",
  "BTN_CONT": "Contact & Partnership",
  
  "DIR_TITLE": "Products & Boards Catalog",
  "DIR_DESC": "Click on each board to view its technical specifications:",
  "DIR_STATUS_ACT": "[ ACTIVE ]",
  "DIR_STATUS_CUST": "[ CUSTOM ]",
  
  // Contacts
  "CONT_TITLE": "Partnership & Project Inquiry",
  "CONT_DESC": "If you are a laboratory or medical equipment manufacturer looking for a powerful technical partner to develop control boards for your products, or need consulting and R&D project execution, get in touch with us.",
  "CONT_BEN_TITLE": "Benefits of Partnering with Nexora:",
  "CONT_BEN_1": "Utilizing the latest cutting-edge technologies (Embedded Rust, ARM Cortex-M).",
  "CONT_BEN_2": "Complete technical support from the design phase to mass production.",
  "CONT_BEN_3": "Delivery of complete technical documentation (Source Code, Schematic, PCB Layout).",
  "LBL_COMP": "Company / Organization Name",
  "PLH_COMP": "Enter your company name",
  "LBL_EML": "Contact Email Address",
  "PLH_EML": "example@company.com",
  "LBL_SPEC": "Project Requirements or Description",
  "PLH_SPEC": "Please describe the technical details or the type of board required...",
  "BTN_SUBMIT": "SUBMIT PARTNERSHIP REQUEST //",
  
  // Datasheet Translations (En)
  "MM-PID-03 // PID_CONTROLLER": "MM-PID-03 // General Purpose PID Temperature Controller",
  "PID_DESC": "Auto-tuning PID algorithm with 0.01°C accuracy. Complete prevention of temperature overshoot, which is critical for cell culture and sterilization. Optimized with Embedded Rust.",
  "COMP_EQUIP": "Compatible Equipment",
  "PID_S1": "Incubator, Bain-Marie, Autoclave, Oven",
  "SENS_INP": "Sensor Input",
  "PID_S2": "PT100 / PT1000 / Thermocouple",
  "COMM_PROT": "Communication Protocol",
  
  "MM-MIX-02 // AC_MOTOR_CONTROLLER": "MM-MIX-02 // Lab Mixer/Rotator AC Motor Controller",
  "MIX_DESC": "Maintains constant speed under variable laboratory loads. Instant jam detection and safe shutdown to prevent damage to sensitive samples. Implemented with sensorless FOC algorithm.",
  "MOTOR_TYP": "Motor Type",
  "CTRL_TECH": "Control Technology",
  "MIX_S2": "Sensorless Vector FOC",
  "SPEED_RNG": "Speed Range",
  "MIX_S3": "100 to 5000 RPM",
  "SAFETY": "Safety",
  "MIX_S4": "Overcurrent & Overtemperature Detection",
  
  "MM-LAM-01 // LAMINAR_HOOD_CONTROLLER": "MM-LAM-01 // Laminar Hood Control Board",
  "LAM_DESC": "Code written in Embedded Rust to guarantee uniform and isolated airflow. Advanced warning system in case of leakage or filter clogging using precise differential pressure sensors.",
  "FAN_CTRL": "Fan Control",
  "LAM_S1": "BLDC Drive with Tachometer Feedback",
  "FILTR": "Filtration",
  "LAM_S2": "HEPA Filter Pressure Drop Monitoring",
  "LAM_S3": "7-inch Touchscreen Display",
  "STD": "Standard",
  "LAM_S4": "Compliant with ISO 14644-1"
};

const dictFa: Record<string, string> = {
  // Common UI
  "Interface Controller Bus // ADR_0x00": "گذرگاه کنترلر رابط // آدرس ۰x۰۰",
  "EMBEDDED MEDICAL SYSTEMS": "تجهیزات الکترونیک پزشکی",
  "LANG_JUMPER": "جامپر_زبان",
  "SYS_BUS_LINK": "اتصال_گذرگاه_سیستم",
  "IMPEDANCE_MATCHED": "تطبیق_امپدانس_موفق",
  "SOUND_ENGINE": "موتور_صوتی",
  "AUDIO_MUTED": "صدای_خاموش",
  "AUDIO_ACTIVE": "صدای_روشن",
  "ACTIVE_TELEMETRY": "تله‌متری_فعال",
  "LINKING_SECURE... // STABLE": "ارتباط_امن... // پایدار",
  "FIDUCIAL_A": "نشانگر_الف",
  
  "SYS_LABEL": "[!] سیستم کنترل کیفیت",
  "SYS_STATUS": "ثبت‌نام ADDR_0x00 آنلاین",
  
  "HERO_TITLE": "طراحی بردهای الکترونیکی ایمن و دقیق برای تجهیزات حساس پزشکی و آزمایشگاهی",
  "HERO_DESC": "تیم نکسورا با بیش از ۲۰ سال تجربه (از سال ۱۳۸۲)، متخصص طراحی و ساخت بردهای کنترلر چندلایه برای تولیدکنندگان تجهیزات پزشکی و آزمایشگاهی است. ما با استفاده از زبان برنامه‌نویسی Rust و میکروکنترلرهای ARM، پایداری، ایمنی و دقت دستگاه‌های شما را در سطح جهانی تضمین می‌کنیم.",
  
  "LABEL_THERM": "کنترلر دمای دقیق",
  "VAL_THERM": "دقت ۰.۰۱ درجه سانتی‌گراد",
  "DESC_THERM": "> آون، انکوباتور، اتوکلاو",
  
  "LABEL_VELOCITY": "درایو موتور هوشمند",
  "VAL_VELOCITY": "کنترل FOC بدون سنسور",
  "DESC_VELOCITY": "> میکسر و روتاتور آزمایشگاهی",
  
  "LABEL_ISO": "ایزولاسیون ایمن",
  "VAL_ISO": "ایزولاسیون گالوانیک کامل",
  "DESC_ISO": "> منطبق با استاندارد IEC 60601",
  
  "ABOUT_TITLE": "چرا زبان برنامه‌نویسی Rust؟",
  "ABOUT_P1": "در تجهیزات حساسی مانند انکوباتورهای نگهداری سلول یا اتوکلاوهای پزشکی، کوچکترین خطای نرم‌افزاری می‌تواند فاجعه‌بار باشد. نوسان دما یا توقف ناگهانی موتور، هزینه‌های سنگینی به بار می‌آورد.",
  "ABOUT_P2": "ما در نکسورا از زبان برنامه‌نویسی Rust در سطح سخت‌افزار (Bare-Metal) استفاده می‌کنیم. این زبان به طور ذاتی از خطاهای رایج در C/C++ مانند نشت حافظه و دسترسی‌های غیرمجاز جلوگیری می‌کند.",
  "ABOUT_P3": "نتیجه، سیستم‌هایی است که هرگز هنگ نمی‌کنند، به شدت سریع هستند و ایمنی آنها در سطح کامپایل تضمین شده است.",
  "COMM_TITLE": "تعهدات فنی نکسورا:",
  "COMM_1": "تضمین عملکرد بلادرنگ (Real-Time) بدون تاخیرهای پیش‌بینی نشده.",
  "COMM_2": "ایمنی سطح بالا (Safety-Critical) با ویژگی‌های Memory-Safe در زبان Rust.",
  "COMM_3": "پشتیبانی از پروتکل‌های صنعتی و پزشکی (Modbus, RS485, CAN).",
  "TEAM_TITLE": "تیم متخصص تحقیق و توسعه (R&D)",
  "TEAM_DESC": "تیم ما متشکل از مهندسان باسابقه الکترونیک و نرم‌افزار نهفته است که از سال ۱۳۸۲ در حال توسعه فناوری‌های روز دنیا در صنعت تجهیزات پزشکی ایران هستند.",
  
  "BTN_ABOUT": "درباره ما",
  "BTN_PROD": "محصولات",
  "BTN_CONT": "تماس و همکاری",
  
  "DIR_TITLE": "فهرست محصولات و بردها",
  "DIR_DESC": "برای مشاهده مشخصات فنی هر برد، روی آن کلیک کنید:",
  "DIR_STATUS_ACT": "[ فعال ]",
  "DIR_STATUS_CUST": "[ سفارشی ]",
  
  "CONT_TITLE": "درخواست همکاری و پروژه",
  "CONT_DESC": "اگر تولیدکننده تجهیزات آزمایشگاهی یا پزشکی هستید و به دنبال یک شریک فنی قدرتمند برای توسعه بردهای کنترلی محصولات خود می‌گردید، یا نیاز به مشاوره و انجام پروژه‌های R&D دارید، با ما در ارتباط باشید.",
  "CONT_BEN_TITLE": "مزایای همکاری با نکسورا:",
  "CONT_BEN_1": "استفاده از جدیدترین فناوری‌های روز دنیا (Embedded Rust, ARM Cortex-M).",
  "CONT_BEN_2": "پشتیبانی فنی کامل از مرحله طراحی تا تولید انبوه.",
  "CONT_BEN_3": "تحویل مستندات کامل فنی (Source Code, Schematic, PCB Layout).",
  "LBL_COMP": "نام شرکت / سازمان",
  "PLH_COMP": "نام شرکت خود را وارد کنید",
  "LBL_EML": "آدرس ایمیل ارتباطی",
  "PLH_EML": "example@company.com",
  "LBL_SPEC": "شرح نیازمندی‌ها یا پروژه مورد نظر",
  "PLH_SPEC": "لطفاً جزئیات فنی یا نوع برد مورد نیاز را شرح دهید...",
  "BTN_SUBMIT": "ارسال درخواست همکاری //",
  
  // Datasheet Translations (Fa)
  "MM-PID-03 // PID_CONTROLLER": "MM-PID-03 // کنترلر PID عمومی دما",
  "PID_DESC": "الگوریتم PID خودتنظیم‌گر (Auto-Tuning) با دقت ۰.۰۱ درجه. جلوگیری کامل از Overshoot دما که برای نگهداری سلول و استریلیزاسیون حیاتی است. بهینه‌سازی شده با Embedded Rust.",
  "COMP_EQUIP": "تجهیزات سازگار",
  "PID_S1": "انکوباتور، بن‌ماری، اتوکلاو، آون",
  "SENS_INP": "ورودی سنسور",
  "PID_S2": "PT100 / PT1000 / ترموکوپل",
  "COMM_PROT": "پروتکل ارتباطی",
  "MCU": "میکروکنترلر",
  
  "MM-MIX-02 // AC_MOTOR_CONTROLLER": "MM-MIX-02 // کنترلر موتور AC میکسر/روتاتور",
  "MIX_DESC": "حفظ سرعت ثابت تحت بارهای متغیر آزمایشگاهی. تشخیص آنی گیرپاژ موتور و توقف ایمن برای جلوگیری از آسیب به نمونه‌های حساس. پیاده‌سازی شده با الگوریتم FOC بدون سنسور.",
  "MOTOR_TYP": "نوع موتور",
  "CTRL_TECH": "تکنولوژی کنترل",
  "MIX_S2": "FOC برداری بدون سنسور (Sensorless)",
  "SPEED_RNG": "محدوده سرعت",
  "MIX_S3": "۱۰۰ تا ۵۰۰۰ دور در دقیقه",
  "SAFETY": "ایمنی",
  "MIX_S4": "تشخیص اضافه جریان و دما",
  
  "MM-LAM-01 // LAMINAR_HOOD_CONTROLLER": "MM-LAM-01 // برد کنترلر هود لامینار",
  "LAM_DESC": "کدهای نوشته شده با Embedded Rust برای تضمین جریان هوای یکنواخت و ایزوله. سیستم هشدار پیشرفته در صورت نشتی یا گرفتگی فیلتر با استفاده از سنسورهای دقیق افت فشار.",
  "FAN_CTRL": "کنترل فن‌ها",
  "LAM_S1": "درایو BLDC با بازخورد تاشومتر",
  "FILTR": "فیلتراسیون",
  "LAM_S2": "پایش افت فشار فیلتر HEPA",
  "UI": "رابط کاربری",
  "LAM_S3": "نمایشگر لمسی ۷ اینچی",
  "STD": "استاندارد",
  "LAM_S4": "منطبق با ISO 14644-1",

  // Contacts existing
  "FAEZ BARGHASA (CTO):": "فائز برغصه (مدیرفنی):",
  "MONIB MOKHTARI (CEO):": "منیب مختاری (مدیرعامل):",
  "EMAIL:": "ایمیل:",
  "PHONE:": "تلفن:",
  "TRANSMITTER PARAMS:": "پارامترهای_انتقال_دهنده:",
  "CONFIG: PGP ENCRYPTION": "پیکربندی: رمزنگاری PGP",
  "DISPATCH: < 24 HOURS": "مسیریابی: کمتر از ۲۴ ساعت",
  "SPEC_REGISTERS": "ثبات‌های_داده"
};