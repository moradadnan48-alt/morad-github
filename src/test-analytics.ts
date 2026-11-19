/**
 * اختبار التحقق المستقل لمخرجات التعديل الجديد (AT-03-A04: شاهد الاختبار)
 * Task ID: CR-04 (اختبار الاستقلالية)
 */

import { CollaborationManager, type TeamMember } from "./collaboration.ts";

function runAnalyticsTest(): void {
  console.log("====================================================");
  console.log("🧪 بدء اختبار التحقق للتعديل الجديد (Analytics Test Suite)");
  console.log("====================================================");

  const manager = new CollaborationManager();
  const dev: TeamMember = { id: "dev-01", name: "مراد عدنان", role: "Lead Developer" };
  const reviewer: TeamMember = { id: "dev-02", name: "المشرف الأكاديمي", role: "Reviewer" };

  // إضافة عينة مهام
  manager.addTask({ id: 1, title: "تهيئة البيئة", assignee: dev, status: "Completed", points: 30 });
  manager.addTask({ id: 2, title: "مراجعة الكود", assignee: reviewer, status: "Completed", points: 40 });
  manager.addTask({ id: 3, title: "تحسين الأداء", assignee: dev, status: "In Progress", points: 30 });

  // الاختبار 1: التحقق من دالة التصفية
  const completed = manager.filterTasksByStatus("Completed");
  console.log(`[TEST 1] عدد المهام المكتملة المتوقع: 2 | الفعلي: ${completed.length}`);
  if (completed.length !== 2) throw new Error("فشل الاختبار 1: خطأ في تصفية المهام المكتملة");
  console.log("✅ اختبار التصفية (filterTasksByStatus) اجتاز بنجاح.");

  // الاختبار 2: التحقق من نسبة الإنجاز
  const rate = manager.calculateCompletionRate();
  const expectedRate = Math.round((2 / 3) * 100); // 67%
  console.log(`[TEST 2] نسبة الإنجاز المتوقعة: ${expectedRate}% | الفعلية: ${rate}%`);
  if (rate !== expectedRate) throw new Error("فشل الاختبار 2: خطأ في حساب نسبة الإنجاز");
  console.log("✅ اختبار نسبة الإنجاز (calculateCompletionRate) اجتاز بنجاح.");

  // الاختبار 3: التحقق من إجمالي النقاط المكتسبة
  const points = manager.getTotalCompletedPoints();
  console.log(`[TEST 3] إجمالي النقاط المتوقع: 70 | الفعلي: ${points}`);
  if (points !== 70) throw new Error("فشل الاختبار 3: خطأ في جمع النقاط المكتملة");
  console.log("✅ اختبار مجموع النقاط (getTotalCompletedPoints) اجتاز بنجاح.");

  console.log("\n----------------------------------------------------");
  manager.printAnalytics();
  console.log("🎉 جميع الاختبارات اجتازت بنجاح تام 100%!");
  console.log("====================================================");
}

runAnalyticsTest();
