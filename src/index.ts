import { CollaborationManager, type TeamMember } from "./collaboration.ts";

const studentName: string = "مراد عدنان";
console.log(`أهلاً بك يا ${studentName} في نشاط GitHub وإدارة التغييرات!`);
console.log("تم تفعيل تتبع التغييرات بنجاح!");

// دمج مساهمة الزميل بعد حل التعارض (Collaborator Review & Status Banner)
const peerName: string = "أحمد خالد (المراجع الأكاديمي)";
console.log(`تم انضمام الزميل: ${peerName} لمراجعة وتطوير المشروع.`);
console.log("حالة المراجعة: تم اعتماد دمج ميزة المهام التعاونية بنجاح ✅");

// ميزة فرع التعاون المدموجة (feature/collaboration-task)
const dev1: TeamMember = { id: "dev-01", name: studentName, role: "Lead Developer" };
const reviewer: TeamMember = { id: "dev-02", name: peerName, role: "Reviewer" };

const manager = new CollaborationManager();
manager.addTask({
  id: 101,
  title: "إعداد موديول إدارة التعاون وتبادل الميزات",
  assignee: dev1,
  status: "Completed",
  points: 40,
});
manager.addTask({
  id: 102,
  title: "مراجعة الكود وحل تعارض الدمج (Merge Conflict)",
  assignee: reviewer,
  status: "Completed",
  points: 60,
});

manager.printSummary();

// مؤشرات التحليلات المستقلة (طلب التعديل CR-04 - نشاط AT-03-A04)
manager.printAnalytics();

