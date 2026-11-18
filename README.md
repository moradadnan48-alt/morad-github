مشروع إدارة التغييرات باستخدام Git و GitHub (morad-github)

توثيق عملي لتطبيق مهارات التحكم في الإصدارات (Version Control) وإدارة التغييرات البرمجية ضمن نشاط AI-03-A01: إدارة التغييرات على منصة مسار.

بيئة التطوير: WebStorm (TypeScript / Node.js)

الأهداف التقنية المنفذة

تهيئة المستودع وضبط التتبع:

إنشاء مستودع محلي نظيف باستخدام الأمر git init.

إعداد ملف .gitignore لاستبعاد مجلدات التبعيات وملفات بيئة التطوير غير الضرورية (node_modules/ و .idea/).

تنظيف الفهرس من الملفات المتتبعة سابقاً عبر git rm -r --cached ..

تنظيم التعديلات في Commits صغيرة ومعبرة:
تم تقسيم العمل إلى 6 commits واضحة ومرتبطة بتعديلات فعلية على المشروع لتسهيل المراجعة والتتبع:

62a6a5d — feat: setup typescript node structure and gitignore

a65b308 — feat: setup typescript project and clean tracking with gitignore

89d13a0 — refactor: update tsconfig settings

2e2a842 — chore: update package configuration

d673181 — feat: update main entry message

bf9319a — docs: finalize gitignore rules and project documentation

قراءة الفروق ومراجعة التاريخ:

استخدام git diff لمقارنة التغييرات الحية وبين الإصدارات المختلفة قبل اعتمادها.

استعراض سجل التغييرات بشكل مختصر ومنظم باستخدام git log --oneline.

هيكلية المشروع

morad-github/
├── src/
│   └── index.ts        # نقطة الدخول الرئيسية للتطبيق بلغة TypeScript
├── .gitignore          # قواعد استبعاد الملفات والمجلدات المؤقتة
├── package.json        # إعدادات المشروع والتبعيات
├── tsconfig.json       # إعدادات مترجم TypeScript
└── README.md           # ملف التوثيق التعريفي للمشروع
