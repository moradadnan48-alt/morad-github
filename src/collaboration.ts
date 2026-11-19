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

  /**
   * تصفية المهام حسب حالتها (طلب التعديل CR-04 - نشاط AT-03-A04)
   */
  filterTasksByStatus(status: "In Progress" | "Under Review" | "Completed"): CollaborativeTask[] {
    return this.tasks.filter((t) => t.status === status);
  }

  /**
   * حساب نسبة الإنجاز المئوية للمهام
   */
  calculateCompletionRate(): number {
    if (this.tasks.length === 0) return 0;
    const completedCount = this.filterTasksByStatus("Completed").length;
    return Math.round((completedCount / this.tasks.length) * 100);
  }

  /**
   * حساب إجمالي النقاط المكتسبة من المهام المكتملة
   */
  getTotalCompletedPoints(): number {
    return this.filterTasksByStatus("Completed").reduce((sum, t) => sum + t.points, 0);
  }

  /**
   * طباعة لوحة التحليلات والإحصائيات
   */
  printAnalytics(): void {
    const rate = this.calculateCompletionRate();
    const points = this.getTotalCompletedPoints();
    console.log("📊 إحصائيات ومؤشرات الأداء المستقلة:");
    console.log(`- إجمالي المهام: ${this.tasks.length}`);
    console.log(`- نسبة الإنجاز: ${rate}%`);
    console.log(`- إجمالي النقاط المكتسبة: ${points} نقطة`);
    console.log("----------------------------------------");
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
