/**
 * موديول إدارة المهام والعمل التعاوني (Collaboration Module)
 * نشاط: AT-03-A03 - التعاون والمراجعة
 */

export interface TeamMember {
  id: string;
  name: string;
  role: "Lead Developer" | "Reviewer" | "Contributor";
}

export interface CollaborativeTask {
  id: number;
  title: string;
  assignee: TeamMember;
  status: "In Progress" | "Under Review" | "Completed";
  points: number;
}

export class CollaborationManager {
  private tasks: CollaborativeTask[] = [];

  addTask(task: CollaborativeTask): void {
    this.tasks.push(task);
  }

  getTasks(): CollaborativeTask[] {
    return this.tasks;
  }

  printSummary(): void {
    console.log("\n========================================");
    console.log("🤝 تقرير المهام التعاونية (Team Collaboration)");
    console.log("========================================");
    this.tasks.forEach((t) => {
      console.log(`- [#${t.id}] ${t.title} | المسؤول: ${t.assignee.name} (${t.assignee.role}) | الحالة: ${t.status}`);
    });
    console.log("========================================\n");
  }
}
