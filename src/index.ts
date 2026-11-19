import { CollaborationManager, type TeamMember } from "./collaboration.ts";

const studentName: string = "مراد عدنان";
console.log(`أهلاً بك يا ${studentName} في نشاط GitHub وإدارة التغييرات!`);
console.log("تم تفعيل تتبع التغييرات بنجاح!");

// ميزة فرع التعاون (feature/collaboration-task)
const dev1: TeamMember = { id: "dev-01", name: studentName, role: "Lead Developer" };
const manager = new CollaborationManager();
manager.addTask({
  id: 101,
  title: "إعداد موديول إدارة التعاون وتبادل الميزات",
  assignee: dev1,
  status: "Under Review",
  points: 40,
});

manager.printSummary();

