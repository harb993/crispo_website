/**
 * The starter menu the POS ships with, as the till would publish it.
 *
 * Pure data, no imports, so both the demo till (relay/demo.mjs) and the website
 * (as its offline preview) can load the same file.
 */

export const DEMO_SNAPSHOT = {
  business: { name: 'Crispo', phone: '0100 000 0000', address: 'القاهرة', currency: 'ج.م' },
  eta: { delivery: 40, takeaway: 20 },
  takeaway: true,
  categories: [
    { id: 1, name: 'وجبات الدجاج المقرمش', order: 1 },
    { id: 2, name: 'البرجر والسندوتشات', order: 2 },
    { id: 3, name: 'المقبلات والبطاطس', order: 3 },
    { id: 4, name: 'المشروبات والحلويات', order: 4 },
  ],
  items: [
    { id: 1, categoryId: 1, name: 'وجبة 4 قطع دجاج مقرمش', price: 135, description: '4 قطع دجاج مقرمش + بطاطس + كول سلو + خبز',
      variants: [{ id: 1, name: 'التتبيلة', options: [{ id: 1, name: 'عادي', delta: 0 }, { id: 2, name: 'حار', delta: 0 }] }] },
    { id: 2, categoryId: 1, name: 'وجبة التوفير العائلية (8 قطع)', price: 260, description: '8 قطع دجاج + 2 بطاطس كبير + 2 كول سلو + 4 خبز',
      variants: [{ id: 3, name: 'التتبيلة', options: [{ id: 5, name: 'عادي', delta: 0 }, { id: 6, name: 'حار', delta: 0 }, { id: 7, name: 'نص ونص', delta: 0 }] }] },
    { id: 3, categoryId: 1, name: 'باكت الحفلات واللمة (12 قطعة)', price: 375, description: '12 قطعة دجاج + 3 بطاطس + 3 صوص + 6 خبز', variants: [] },
    { id: 4, categoryId: 1, name: 'وجبة ستريبس دجاج (4 قطع)', price: 110, description: '4 أصابع ستريبس مقرمشة + بطاطس + صوص هوني ماسترد', variants: [] },
    { id: 5, categoryId: 2, name: 'ساندوتش زنجر سوبريم كلاسيك', price: 95, description: 'صدر دجاج مقرمش + خس + مايونيز + خبز بريوش محمص',
      variants: [{ id: 4, name: 'الحجم', options: [{ id: 8, name: 'سنجل', delta: 0 }, { id: 9, name: 'دبل', delta: 35 }] }] },
    { id: 6, categoryId: 2, name: 'برجر فاير سبايسي حار', price: 105, description: 'فيليه متبل حار + صوص باربكيو حار + جبنة شيدر + هالبينو', variants: [] },
    { id: 7, categoryId: 2, name: 'دبل كرانش ستاك العملاق', price: 140, description: 'قطعتين فيليه مقرمش + دبل جبنة + صوص كريسبو الخاص', variants: [] },
    { id: 8, categoryId: 2, name: 'تشيكن راب تورتيلا باربكيو', price: 85, description: 'قطع ستريبس مقرمشة + بيف بيكون + صوص باربكيو مدخن', variants: [] },
    { id: 9, categoryId: 3, name: 'بطاطس شيدر وهالبينو لوديد', price: 55, description: 'بطاطس مقلية مغطاة بصلصة الشيدر وشرائح الهالبينو',
      variants: [{ id: 5, name: 'الحجم', options: [{ id: 10, name: 'وسط', delta: 0 }, { id: 11, name: 'كبير', delta: 15 }] }] },
    { id: 10, categoryId: 3, name: 'حلقات بصل مقرمشة (8 قطع)', price: 40, description: 'حلقات بصل ذهبية مع صوص الثومية الخاص', variants: [] },
    { id: 11, categoryId: 3, name: 'سلطة كول سلو كلاسيك كبيرة', price: 30, description: 'كرنب وجزر طازج بالمايونيز وصوص العسل', variants: [] },
    { id: 12, categoryId: 3, name: 'أصابع موزاريلا مقلية (4 قطع)', price: 60, description: 'موزاريلا سايحة مع صوص المارينارا', variants: [] },
    { id: 13, categoryId: 4, name: 'بيبسي كانز 330 مل', price: 20, description: 'مشروب غازي بارد منعش', variants: [] },
    { id: 14, categoryId: 4, name: 'سفن آب كانز 330 مل', price: 20, description: 'مشروب غازي ليمون منعش', variants: [] },
    { id: 15, categoryId: 4, name: 'عصير برتقال فريش', price: 35, description: 'برتقال طبيعي 100% بدون سكر مضاف', variants: [] },
    { id: 16, categoryId: 4, name: 'مولتن تشوكلت لافا كيك', price: 65, description: 'كيك الشوكولاتة الساخن بقلب سايح', variants: [] },
  ],
  areas: [
    { id: 1, name: 'وسط البلد', fee: 15 },
    { id: 2, name: 'المعادي', fee: 25 },
    { id: 3, name: 'مدينة نصر', fee: 20 },
    { id: 4, name: 'المهندسين', fee: 30 },
    { id: 5, name: 'الدقي', fee: 25 },
    { id: 6, name: 'حلوان', fee: 35 },
  ],
}
