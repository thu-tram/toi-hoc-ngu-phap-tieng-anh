// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="bat-dau.html"><strong aria-hidden="true">1.</strong> Trước khi bắt đầu</a></li><li class="chapter-item expanded "><a href="20-quy-tac-ngu-phap.html"><strong aria-hidden="true">2.</strong> 20 quy tắc ngữ pháp</a></li><li class="chapter-item expanded "><a href="word-level/parts-of-speech.html"><strong aria-hidden="true">3.</strong> Ngữ pháp cấp độ từ</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="word-level/dong-tu/index.html"><strong aria-hidden="true">3.1.</strong> Động từ và thì động từ</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.1.</strong> Thì hiện tại</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="word-level/dong-tu/hien-tai-don.html"><strong aria-hidden="true">3.1.1.1.</strong> Đơn</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/hien-tai-tiep-dien.html"><strong aria-hidden="true">3.1.1.2.</strong> Tiếp diễn</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/hien-tai-hoan-thanh.html"><strong aria-hidden="true">3.1.1.3.</strong> Hoàn thành</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/hien-tai-hoan-thanh-tiep-dien.html"><strong aria-hidden="true">3.1.1.4.</strong> Hoàn thành tiếp diễn</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.2.</strong> Thì quá khứ</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="word-level/dong-tu/qua-khu-don.html"><strong aria-hidden="true">3.1.2.1.</strong> Đơn</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/qua-khu-tiep-dien.html"><strong aria-hidden="true">3.1.2.2.</strong> Tiếp diễn</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/qua-khu-hoan-thanh.html"><strong aria-hidden="true">3.1.2.3.</strong> Hoàn thành</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/qua-khu-hoan-thanh-tiep-dien.html"><strong aria-hidden="true">3.1.2.4.</strong> Hoàn thành tiếp diễn</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.3.</strong> Thì tương lai</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="word-level/dong-tu/tuong-lai-don.html"><strong aria-hidden="true">3.1.3.1.</strong> Đơn</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/tuong-lai-tiep-dien.html"><strong aria-hidden="true">3.1.3.2.</strong> Tiếp diễn</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/tuong-lai-hoan-thanh.html"><strong aria-hidden="true">3.1.3.3.</strong> Hoàn thành</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/tuong-lai-hoan-thanh-tiep-dien.html"><strong aria-hidden="true">3.1.3.4.</strong> Hoàn thành tiếp diễn</a></li></ol></li><li class="chapter-item expanded "><a href="word-level/dong-tu/going-to.html"><strong aria-hidden="true">3.1.4.</strong> going to</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/about-to.html"><strong aria-hidden="true">3.1.5.</strong> about to</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/for-va-since.html"><strong aria-hidden="true">3.1.6.</strong> for và since</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/subjunctive-mood.html"><strong aria-hidden="true">3.1.7.</strong> Subjunctive Mood</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/chu-dong-bi-dong.html"><strong aria-hidden="true">3.1.8.</strong> Dạng bị động</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/used-to.html"><strong aria-hidden="true">3.1.9.</strong> be used to/used to do</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/future-time.html"><strong aria-hidden="true">3.1.10.</strong> Future Time</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/ban-chat-cau-dieu-kien.html"><strong aria-hidden="true">3.1.11.</strong> Câu điều kiện</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="word-level/dong-tu/cau-dieu-kien.html"><strong aria-hidden="true">3.1.11.1.</strong> Các loại câu điều kiện</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/nhung-cach-khac-if.html"><strong aria-hidden="true">3.1.11.2.</strong> Những cách khác để diễn tả câu điều kiện</a></li></ol></li><li class="chapter-item expanded "><a href="word-level/dong-tu/dong-tu-khuyet-thieu.html"><strong aria-hidden="true">3.1.12.</strong> Động từ khuyết thiếu</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/phrasal-verb-co-ban.html"><strong aria-hidden="true">3.1.13.</strong> Phrasal Verbs cơ bản</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/cau-hoi.html"><strong aria-hidden="true">3.1.14.</strong> Câu hỏi</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/cau-hoi-duoi.html"><strong aria-hidden="true">3.1.15.</strong> Câu hỏi đuôi - Tag Questions</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/s-v-argreement.html"><strong aria-hidden="true">3.1.16.</strong> Hòa hợp chủ ngữ - động từ</a></li><li class="chapter-item expanded "><a href="word-level/dong-tu/the-sai-khien.html"><strong aria-hidden="true">3.1.17.</strong> Thể sai khiến</a></li></ol></li><li class="chapter-item expanded "><a href="word-level/danh-tu/index.html"><strong aria-hidden="true">3.2.</strong> Danh từ</a></li><li class="chapter-item expanded "><a href="word-level/tinh-tu/index.html"><strong aria-hidden="true">3.3.</strong> Tính từ</a></li><li class="chapter-item expanded "><a href="word-level/trang-tu/index.html"><strong aria-hidden="true">3.4.</strong> Trạng từ</a></li><li class="chapter-item expanded "><a href="word-level/tu-han-dinh/index.html"><strong aria-hidden="true">3.5.</strong> Từ hạn định</a></li><li class="chapter-item expanded "><a href="word-level/gioi-tu/index.html"><strong aria-hidden="true">3.6.</strong> Giới từ</a></li><li class="chapter-item expanded "><a href="word-level/dai-tu/index.html"><strong aria-hidden="true">3.7.</strong> Đại từ</a></li><li class="chapter-item expanded "><a href="word-level/lien-tu/index.html"><strong aria-hidden="true">3.8.</strong> Liên từ</a></li><li class="chapter-item expanded "><a href="word-level/than-tu/index.html"><strong aria-hidden="true">3.9.</strong> Thán từ</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> Ngữ pháp cấp độ câu</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="sentence-level/phrase-clause-sentence.html"><strong aria-hidden="true">4.1.</strong> Cụm từ &amp; Mệnh đề</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="sentence-level/grammatical-phrases.html"><strong aria-hidden="true">4.1.1.</strong> Cụm từ trong Tiếng Anh</a></li><li class="chapter-item expanded "><a href="sentence-level/menh-de-doc-lap-phu-thuoc.html"><strong aria-hidden="true">4.1.2.</strong> Mệnh đề độc lập và phụ thuộc</a></li><li class="chapter-item expanded "><a href="sentence-level/menh-de/menh-de-danh-tu.html"><strong aria-hidden="true">4.1.3.</strong> Mệnh đề danh từ</a></li><li class="chapter-item expanded "><a href="sentence-level/menh-de/menh-de-quan-he.html"><strong aria-hidden="true">4.1.4.</strong> Mệnh đề quan hệ</a></li><li class="chapter-item expanded "><a href="sentence-level/menh-de/menh-de-trang-tu.html"><strong aria-hidden="true">4.1.5.</strong> Mệnh đề trạng từ</a></li></ol></li><li class="chapter-item expanded "><a href="sentence-level/cau-trong-tieng-anh-la-gi.html"><strong aria-hidden="true">4.2.</strong> Câu trong Tiếng Anh</a></li><li class="chapter-item expanded "><a href="sentence-level/loai-cau.html"><strong aria-hidden="true">4.3.</strong> Bốn kiểu câu &amp; Bốn kiểu cấu trúc câu</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> Linking, Intransitive và Transitive Verbs</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="sentence-level/noi-dong-tu-ngoai-dong-tu.html"><strong aria-hidden="true">4.4.1.</strong> Nội động từ và ngoại động từ</a></li><li class="chapter-item expanded "><a href="sentence-level/linking-verb.html"><strong aria-hidden="true">4.4.2.</strong> Linking verbs</a></li></ol></li><li class="chapter-item expanded "><a href="sentence-level/tan-ngu.html"><strong aria-hidden="true">4.5.</strong> Direct Object và Indirect Object</a></li><li class="chapter-item expanded "><a href="sentence-level/trang-tu-lien-ket.html"><strong aria-hidden="true">4.6.</strong> Trạng từ liên kết - Conjunctive Adverbs</a></li><li class="chapter-item expanded "><a href="sentence-level/loi-noi-truc-tiep-va-gian-tiep.html"><strong aria-hidden="true">4.7.</strong> Reported Speech</a></li><li class="chapter-item expanded "><a href="sentence-level/cac-chu-de-ngu-phap-khac.html"><strong aria-hidden="true">4.8.</strong> Các danh mục ngữ pháp khác</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.9.</strong> Những phần khác liên quan đến câu</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="sentence-level/punctuation.html"><strong aria-hidden="true">4.9.1.</strong> Punctuation</a></li><li class="chapter-item expanded "><a href="sentence-level/capitalization.html"><strong aria-hidden="true">4.9.2.</strong> Capitalization</a></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> Chuẩn bị để học lên nâng cao</div></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
