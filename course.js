/* 原始繁體中文教材依主題分頁；資料日期沿用原站。 */
window.course = {
  "chapters": [
    {
      "id": "foundation",
      "title": "認識 AI",
      "summary": "基本類型、產品與模型，以及資訊的時效性。",
      "question": "先理解概念，再開始選擇工具。"
    },
    {
      "id": "tools",
      "title": "AI 工具地圖",
      "summary": "依工作用途，找到合適的工具與官方入口。",
      "question": "從你要完成的工作，找到合適的工具。"
    },
    {
      "id": "patterns",
      "title": "AI 使用模式",
      "summary": "比較對話、研究、流程與代理的工作方式。",
      "question": "同一個任務，可以有不同的做法。"
    },
    {
      "id": "practice",
      "title": "工作應用與練習",
      "summary": "把概念帶回日常工作，用三題情境檢查理解。",
      "question": "從日常任務開始，練習做選擇。"
    },
    {
      "id": "responsibility",
      "title": "風險與參考資料",
      "summary": "掌握使用原則，保留資訊來源與原始日期。",
      "question": "讓每一份工作成果，都有依據可查。"
    }
  ],
  "lessons": [
    {
      "id": "overview",
      "chapter": "foundation",
      "title": "先認識 AI 的四種面貌",
      "description": "「AI」是大範圍概念。以下四類彼此可以重疊；同一個產品可能同時具備多種能力。",
      "html": "<div class=\"grid\"><article class=\"card\"><div class=\"symbol\">01</div><div class=\"mini\">PREDICTIVE</div><h3>傳統／預測型 AI</h3><p>從資料中找到規律，進行分類、辨識或預測。例如品質檢測、需求預測、異常偵測。</p></article><article class=\"card\"><div class=\"symbol\">02</div><div class=\"mini\">GENERATIVE</div><h3>生成式 AI</h3><p>根據需求生成文字、圖片、音訊、影片或程式碼。常見於寫作、簡報和創意製作。</p></article><article class=\"card\"><div class=\"symbol\">03</div><div class=\"mini\">MULTIMODAL</div><h3>多模態 AI</h3><p>理解與處理文字、圖片、聲音、影片等不同資訊形式，例如看圖問答或語音互動。</p></article><article class=\"card\"><div class=\"symbol\">04</div><div class=\"mini\">AGENTIC</div><h3>代理式 AI</h3><p>在給定目標、工具與授權限制下，規劃工作步驟、採取行動並依結果調整。</p></article></div>",
      "kind": "content"
    },
    {
      "id": "names",
      "chapter": "foundation",
      "title": "產品、模型、模式，分開看",
      "description": "這三個詞，回答的是不同的問題。",
      "html": "<div class=\"definition-list\"><div><span>01</span><h3>產品名稱</h3><p>你正在使用的服務，例如 ChatGPT。</p></div><div><span>02</span><h3>AI 模型</h3><p>產品使用的模型系列，例如 GPT-6。</p></div><div><span>03</span><h3>使用模式</h3><p>你與 AI 合作的方式，例如 Chat 或多步驟工作執行。</p></div></div><div class=\"callout\"><strong>先記住：</strong>產品名稱、AI 模型、使用模式是三件不同的事。以 ChatGPT 為例，它是產品；GPT-6 是模型系列；Chat 與多步驟工作執行則是不同的使用方式。</div>",
      "kind": "content"
    },
    {
      "id": "timeline",
      "chapter": "foundation",
      "title": "發展時間軸：工作方式的演進",
      "description": "同一個名稱的產品，功能、模型與授權可能在幾個月內改變。分享 AI 資訊時，應同時記錄公告日期及本次查核日期。",
      "html": "<div class=\"timeline\"><div class=\"event\"><div class=\"date\">2024/12/19</div><h3>Agent 與 Workflow 概念受到關注</h3><p>Anthropic 發表《Building effective agents》，系統性解釋預設流程與動態代理的區別。</p><a href=\"https://www.anthropic.com/research/building-effective-agents\" target=\"_blank\" rel=\"noopener noreferrer\">查看官方文章 ↗</a></div><div class=\"event\"><div class=\"date\">2025/07/17</div><h3>OpenAI 推出 ChatGPT agent</h3><p>代理模式整合網頁操作、研究與執行工具；功能入口後續隨產品演進而改變。</p><a href=\"https://openai.com/index/introducing-chatgpt-agent/\" target=\"_blank\" rel=\"noopener noreferrer\">查看官方公告 ↗</a></div><div class=\"event\"><div class=\"date\">2026/07/09</div><h3>ChatGPT Work 發布</h3><p>OpenAI 將較長、跨檔案與應用程式的工作納入 Work 模式。</p><a href=\"https://help.openai.com/en/articles/6825453-chatgpt-release-notes\" target=\"_blank\" rel=\"noopener noreferrer\">查看版本紀錄 ↗</a></div></div>",
      "kind": "content"
    },
    {
      "id": "timeline-models",
      "chapter": "foundation",
      "title": "發展時間軸：產品與模型更新",
      "description": "公告日期和目前是否可用，需要分別確認。",
      "html": "<div class=\"timeline\"><div class=\"event\"><div class=\"date\">2026/07/16</div><h3>NotebookLM 更名為 Gemini Notebook</h3><p>這也是為何舊教材可能找不到相同產品介面的例子。</p><a href=\"https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/\" target=\"_blank\" rel=\"noopener noreferrer\">查看 Google 公告 ↗</a></div><div class=\"event\"><div class=\"date\">2026/09/22</div><h3>Claude Opus 5.5 發布</h3><p>Anthropic 更新其代理式程式設計與知識工作模型。</p><a href=\"https://www.anthropic.com/claude-opus-5-5\" target=\"_blank\" rel=\"noopener noreferrer\">查看模型公告 ↗</a></div><div class=\"event\"><div class=\"date\">2026/10</div><h3>GPT-6 與 Gemini 4 Argon 的更新</h3><p>主要模型持續演進；模型推出與特定方案、地區正式可用的時間可能不同。</p><a href=\"https://help.openai.com/en/articles/9624314-model-release-notes\" target=\"_blank\" rel=\"noopener noreferrer\">OpenAI 模型版本 ↗</a></div></div>",
      "kind": "content"
    },
    {
      "id": "market",
      "chapter": "tools",
      "title": "全部工具",
      "description": "依工作用途分類，不代表能力排名。點選類別篩選，點選工具的官方入口可查看目前可用功能。",
      "html": "",
      "kind": "tools",
      "category": "all"
    },
    {
      "id": "tools-general",
      "chapter": "tools",
      "title": "通用助理",
      "description": "依工作用途分類，不代表能力排名。點選類別篩選，點選工具的官方入口可查看目前可用功能。",
      "html": "",
      "kind": "tools",
      "category": "general"
    },
    {
      "id": "tools-research",
      "chapter": "tools",
      "title": "研究／文件",
      "description": "依工作用途分類，不代表能力排名。點選類別篩選，點選工具的官方入口可查看目前可用功能。",
      "html": "",
      "kind": "tools",
      "category": "research"
    },
    {
      "id": "tools-creative",
      "chapter": "tools",
      "title": "內容創作",
      "description": "依工作用途分類，不代表能力排名。點選類別篩選，點選工具的官方入口可查看目前可用功能。",
      "html": "",
      "kind": "tools",
      "category": "creative"
    },
    {
      "id": "tools-workflow",
      "chapter": "tools",
      "title": "自動化",
      "description": "依工作用途分類，不代表能力排名。點選類別篩選，點選工具的官方入口可查看目前可用功能。",
      "html": "",
      "kind": "tools",
      "category": "workflow"
    },
    {
      "id": "tools-coding",
      "chapter": "tools",
      "title": "程式開發",
      "description": "依工作用途分類，不代表能力排名。點選類別篩選，點選工具的官方入口可查看目前可用功能。",
      "html": "",
      "kind": "tools",
      "category": "coding"
    },
    {
      "id": "modes",
      "chapter": "patterns",
      "title": "四種常見的 AI 工作方式",
      "description": "它們不是互斥產品，而是不同工作模式。任務越複雜，不代表一定要用自主程度最高的工具。",
      "html": "<div class=\"mode-steps\"><div class=\"mode-step\"><strong>01</strong><b>Chat</b><span>人逐步提問／調整</span></div><div class=\"mode-step\"><strong>02</strong><b>Deep Research</b><span>蒐集來源／分析</span></div><div class=\"mode-step\"><strong>03</strong><b>Workflow</b><span>依設定的流程執行</span></div><div class=\"mode-step\"><strong>04</strong><b>AI Agent</b><span>依目標決定步驟</span></div></div><div class=\"callout\"><strong>重要差異：</strong>Workflow 通常按預先規劃的路徑運作；Agent 可根據目標與回饋動態決定下一步。兩者可以混合使用，也都需要權限管理與人工監督。</div>",
      "kind": "content"
    },
    {
      "id": "modes-compare",
      "chapter": "patterns",
      "title": "使用模式比較：對話、研究與助理",
      "description": "從人員角色、AI 能力和適用任務來比較。",
      "html": "<div class=\"scroll-table\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可左右捲動\"><table><thead><tr><th>模式</th><th>人員角色</th><th>AI 主要能力</th><th>最適合</th></tr></thead><tbody><tr><td>Chat 對話</td><td>一步一步發問、修改</td><td>解答與生成內容</td><td>改寫、翻譯、草稿</td></tr><tr><td>Deep Research</td><td>定義研究主題和範圍</td><td>搜尋多個來源、綜合分析</td><td>趨勢報告、競品研究</td></tr><tr><td>Copilot 助理</td><td>在既有軟體中下指令</td><td>協助編輯與完成操作</td><td>Office、會議、開發</td></tr></tbody></table></div>",
      "kind": "content"
    },
    {
      "id": "modes-execute",
      "chapter": "patterns",
      "title": "使用模式比較：流程與代理",
      "description": "決定步驟的方式不同，管理權限與監督同樣重要。",
      "html": "<div class=\"scroll-table\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可左右捲動\"><table><thead><tr><th>模式</th><th>人員角色</th><th>AI 主要能力</th><th>最適合</th></tr></thead><tbody><tr><td>Workflow 工作流程</td><td>設計觸發條件及步驟</td><td>按既定路徑執行</td><td>表單、通知、例行報表</td></tr><tr><td>Agent 代理</td><td>設定目標、權限與審核點</td><td>自行規劃、使用工具並調整</td><td>跨網站、跨工具的任務</td></tr><tr><td>Multi-Agent 多代理</td><td>設計角色、協作與監督</td><td>多代理分工、交接任務</td><td>較複雜的跨專業工作</td></tr></tbody></table></div><div class=\"callout\"><strong>重要差異：</strong>Workflow 通常按預先規劃的路徑運作；Agent 可根據目標與回饋動態決定下一步。兩者可以混合使用，也都需要權限管理與人工監督。</div>",
      "kind": "content"
    },
    {
      "id": "scenario",
      "chapter": "patterns",
      "title": "同一個工作，四種 AI 做法",
      "description": "情境：「主管希望每個月收到一份 AI 產業趨勢報告。」切換下列模式，看任務如何被處理。",
      "html": "<div class=\"scenario\"><div class=\"eyebrow\">WORK DEMO · MONTHLY AI BRIEFING</div><h3>每月 AI 趨勢報告</h3>\n            <div class=\"tabs\" role=\"tablist\" aria-label=\"切換 AI 使用模式\"><button class=\"tab\" id=\"tab-chat\" role=\"tab\" aria-controls=\"scenarioPanel\" aria-selected=\"true\" data-mode=\"chat\">Chat</button><button class=\"tab\" id=\"tab-research\" role=\"tab\" aria-controls=\"scenarioPanel\" aria-selected=\"false\" data-mode=\"research\">Deep Research</button><button class=\"tab\" id=\"tab-workflow\" role=\"tab\" aria-controls=\"scenarioPanel\" aria-selected=\"false\" data-mode=\"workflow\">Workflow</button><button class=\"tab\" id=\"tab-agent\" role=\"tab\" aria-controls=\"scenarioPanel\" aria-selected=\"false\" data-mode=\"agent\">Agent</button></div>\n            <div id=\"scenarioPanel\" role=\"tabpanel\" aria-labelledby=\"tab-chat\" class=\"panel\" aria-live=\"polite\"></div>\n          </div>",
      "kind": "scenario"
    },
    {
      "id": "usecases",
      "chapter": "practice",
      "title": "日常工作：寫作、文件與研究",
      "description": "先看任務需要的成果，再決定使用模式。",
      "html": "<div class=\"scroll-table\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可左右捲動\"><table><thead><tr><th>工作任務</th><th>適合模式</th><th>產出成果</th></tr></thead><tbody><tr><td>郵件、公文、簡報草稿</td><td>Chat</td><td>文字草稿、摘要與改寫</td></tr><tr><td>整理研究報告或技術文件</td><td>文件 AI／RAG</td><td>引用來源的重點整理</td></tr><tr><td>研究產業與競爭者動向</td><td>Deep Research</td><td>附證據與日期的研究簡報</td></tr></tbody></table></div><div class=\"callout\">RAG（檢索增強生成）是先從文件或知識庫擷取相關資訊，再讓 AI 組織答案的方法；不是單獨的 AI 品牌。</div>",
      "kind": "content"
    },
    {
      "id": "usecases-execute",
      "chapter": "practice",
      "title": "日常工作：分析、例行與跨工具任務",
      "description": "流程明確時可以自動化；步驟需要調整時，再考慮代理。",
      "html": "<div class=\"scroll-table\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可左右捲動\"><table><thead><tr><th>工作任務</th><th>適合模式</th><th>產出成果</th></tr></thead><tbody><tr><td>Excel 數據彙整與圖表</td><td>資料分析 AI／Copilot</td><td>趨勢圖、整理表、解讀</td></tr><tr><td>固定通知與月報</td><td>Workflow</td><td>可重複執行的工作流程</td></tr><tr><td>跨網站蒐集並完成交付</td><td>AI Agent</td><td>多步驟工作成果</td></tr></tbody></table></div>",
      "kind": "content"
    },
    {
      "id": "quiz",
      "chapter": "practice",
      "title": "三題互動測驗",
      "description": "用不同情境練習判斷：哪一種模式更合適？",
      "html": "<div class=\"quiz\"><div class=\"quiz-head\"><span id=\"quizCount\">第 1 題 / 共 3 題</span><span id=\"quizScore\">已答對 0 題</span></div><div class=\"quiz-progress\"><div id=\"quizBar\" style=\"width:33.333%\"></div></div>\n            <h3 id=\"quizQuestion\"></h3><div id=\"quizOptions\" role=\"group\" aria-label=\"選擇答案\"></div><div id=\"quizFeedback\" class=\"quiz-feedback hidden\" aria-live=\"polite\"></div>\n            <div class=\"quiz-actions\"><button id=\"quizPrev\" class=\"btn-small\" type=\"button\">上一題</button><button id=\"quizNext\" class=\"btn-small fill\" type=\"button\">下一題 →</button></div>\n          </div>",
      "kind": "quiz"
    },
    {
      "id": "safety",
      "chapter": "responsibility",
      "title": "使用風險：資訊與資料",
      "description": "AI 可以提高效率，但「正確性、權限與責任」仍需要人來把關。",
      "html": "<div class=\"risk-grid\"><div class=\"risk\"><b>01 · AI 幻覺</b><p>數字、論文、法規或新聞可能編造。應回到原始來源比對。</p></div><div class=\"risk\"><b>02 · 機密與個資</b><p>未核准前，避免輸入內部機密、個人資料、未公開合約等內容。</p></div><div class=\"risk\"><b>03 · 著作權與授權</b><p>商用文字、圖片、語音須確認資料來源及使用權利。</p></div></div>",
      "kind": "content"
    },
    {
      "id": "safety-actions",
      "chapter": "responsibility",
      "title": "使用風險：權限與版本",
      "description": "把審核關卡放在重要動作之前。",
      "html": "<div class=\"risk-grid\"><div class=\"risk\"><b>04 · Agent 的動作權限</b><p>寄信、刪改資料、付款等高影響行為應設審核關卡與日誌。</p></div><div class=\"risk\"><b>05 · 提示注入</b><p>外部網頁與文件可能含誤導指令；不要把內容視為可信的系統命令。</p></div><div class=\"risk\"><b>06 · 版本與可用性</b><p>產品可能改名、停用或限地區／方案開放；使用前重新確認。</p></div></div><div class=\"callout\"><strong>使用原則：</strong>先定義任務 → 選擇適當工具 → 檢查資料權限 → 驗證重要資訊 → 人員確認最終結果。</div>",
      "kind": "content"
    },
    {
      "id": "sources",
      "chapter": "responsibility",
      "title": "方法與 OpenAI 資料",
      "description": "以下優先選用原始廠商公告、技術文件與公部門資料。「發布日」與「查核日」分開標示；未註明日期的動態頁面不強行推定發布日。",
      "html": "<div class=\"source-list\"><div class=\"source\"><div><b>Anthropic｜Building effective agents</b><p>Workflow 與 Agent 定義 · 發布 2024/12/19</p></div><a href=\"https://www.anthropic.com/research/building-effective-agents\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div><div class=\"source\"><div><b>OpenAI｜ChatGPT release notes</b><p>ChatGPT Work · 公告 2026/07/09；版本頁持續更新</p></div><a href=\"https://help.openai.com/en/articles/6825453-chatgpt-release-notes\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div><div class=\"source\"><div><b>OpenAI｜Model Release Notes</b><p>GPT-6 模型變更 · 2026/10/29 更新；頁面持續更新</p></div><a href=\"https://help.openai.com/en/articles/9624314-model-release-notes\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div></div>",
      "kind": "content"
    },
    {
      "id": "sources-2",
      "chapter": "responsibility",
      "title": "Google 與 Anthropic 資料",
      "description": "以下優先選用原始廠商公告、技術文件與公部門資料。「發布日」與「查核日」分開標示；未註明日期的動態頁面不強行推定發布日。",
      "html": "<div class=\"source-list\"><div class=\"source\"><div><b>Google｜NotebookLM is now Gemini Notebook</b><p>品牌與研究功能 · 2026/07/16</p></div><a href=\"https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div><div class=\"source\"><div><b>Google｜Gemini 4 Argon</b><p>模型發布與可用性 · 2026/10 公告</p></div><a href=\"https://blog.google/intl/zh-tw/products/explore-get-answers/introducing-gemini-4-argon/\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div><div class=\"source\"><div><b>Anthropic｜Claude Opus 5.5</b><p>模型公告 · 2026/09/22</p></div><a href=\"https://www.anthropic.com/claude-opus-5-5\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div></div>",
      "kind": "content"
    },
    {
      "id": "sources-3",
      "chapter": "responsibility",
      "title": "治理與使用參考資料",
      "description": "以下優先選用原始廠商公告、技術文件與公部門資料。「發布日」與「查核日」分開標示；未註明日期的動態頁面不強行推定發布日。",
      "html": "<div class=\"source-list\"><div class=\"source\"><div><b>Microsoft Learn｜Agents overview</b><p>Copilot Studio 的代理工作架構 · 動態文件，查核 2026/11/01</p></div><a href=\"https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-overview\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div><div class=\"source\"><div><b>NIST｜Generative AI Risk Management Profile</b><p>風險治理框架 · 2024/07/26</p></div><a href=\"https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div><div class=\"source\"><div><b>行政院｜使用生成式 AI 參考指引</b><p>台灣公部門參考規範 · 2023 年公告</p></div><a href=\"https://www.ey.gov.tw/Page/448DE008087A1971/40c1a925-121d-4b6b-8f40-7e9e1a5401f2\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀來源 ↗</a></div></div><div class=\"callout\"><strong>更新建議：</strong>每次分享前，重新確認每個產品的「正式／預覽／停用」狀態、使用方案、發表日期與來源是否仍有效。網站內容為教學整理，非產品能力或安全性的排名。</div>",
      "kind": "content"
    }
  ],
  "tools": [
    "<article class=\"tool\" data-group=\"general\"><div class=\"tool-top\"><span class=\"tool-logo\">G</span><span class=\"tool-type\">通用</span></div><h3>ChatGPT</h3><p>問答、寫作、資料分析、程式設計、多步驟工作。</p><a href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>OpenAI · GPT-6 更新 2026/10/29</small></article>",
    "<article class=\"tool\" data-group=\"general coding\"><div class=\"tool-top\"><span class=\"tool-logo\">C</span><span class=\"tool-type\">通用／開發</span></div><h3>Claude</h3><p>長文件理解、程式開發、複雜知識工作與 Agent。</p><a href=\"https://claude.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>Anthropic · Opus 5.5：2026/09/22</small></article>",
    "<article class=\"tool\" data-group=\"general research\"><div class=\"tool-top\"><span class=\"tool-logo\">✦</span><span class=\"tool-type\">通用／多模態</span></div><h3>Gemini</h3><p>多模態理解、研究以及 Google 生態系整合。</p><a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>Google · Gemini 4 Argon：2026/10</small></article>",
    "<article class=\"tool\" data-group=\"general workflow\"><div class=\"tool-top\"><span class=\"tool-logo\">M</span><span class=\"tool-type\">工作助理</span></div><h3>Microsoft Copilot</h3><p>Microsoft 365 文件、會議、企業工作流程及 Agent。</p><a href=\"https://www.microsoft.com/microsoft-copilot\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>Microsoft · 依授權與組織設定而異</small></article>",
    "<article class=\"tool\" data-group=\"general coding\"><div class=\"tool-top\"><span class=\"tool-logo\">D</span><span class=\"tool-type\">推理／開發</span></div><h3>DeepSeek</h3><p>推理、程式設計與開發者 API；不同產品版本能力可能不同。</p><a href=\"https://www.deepseek.com/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>DeepSeek · 查核 2026/11/01</small></article>",
    "<article class=\"tool\" data-group=\"research\"><div class=\"tool-top\"><span class=\"tool-logo\">P</span><span class=\"tool-type\">搜尋研究</span></div><h3>Perplexity</h3><p>以網路搜尋、資料檢索及附來源回答為重點。</p><a href=\"https://www.perplexity.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>Perplexity · 查核 2026/11/01</small></article>",
    "<article class=\"tool\" data-group=\"research\"><div class=\"tool-top\"><span class=\"tool-logo\">N</span><span class=\"tool-type\">文件知識</span></div><h3>Gemini Notebook</h3><p>以指定文件為核心進行問答、整理、研究與學習。</p><a href=\"https://notebooklm.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>Google · 原 NotebookLM，2026/07/16 更名</small></article>",
    "<article class=\"tool\" data-group=\"creative\"><div class=\"tool-top\"><span class=\"tool-logo\">✎</span><span class=\"tool-type\">視覺設計</span></div><h3>Canva AI</h3><p>簡報、海報、社群素材與圖片設計協作。</p><a href=\"https://www.canva.com/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>Canva · 查核 2026/11/01</small></article>",
    "<article class=\"tool\" data-group=\"creative\"><div class=\"tool-top\"><span class=\"tool-logo\">♫</span><span class=\"tool-type\">語音</span></div><h3>ElevenLabs</h3><p>文字轉語音、配音、旁白及語音 Agent。</p><a href=\"https://elevenlabs.io/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>ElevenLabs · 查核 2026/11/01</small></article>",
    "<article class=\"tool\" data-group=\"creative\"><div class=\"tool-top\"><span class=\"tool-logo\">▶</span><span class=\"tool-type\">影片</span></div><h3>Runway</h3><p>生成與編輯影片，適合示意影片及行銷內容。</p><a href=\"https://runwayml.com/\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>Runway · 查核 2026/11/01</small></article>",
    "<article class=\"tool\" data-group=\"coding\"><div class=\"tool-top\"><span class=\"tool-logo\">&lt;/&gt;</span><span class=\"tool-type\">開發</span></div><h3>GitHub Copilot</h3><p>程式碼建議、除錯、測試，以及 Coding Agent 任務。</p><a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener noreferrer\">開啟官方網站 ↗</a><small>GitHub · 查核 2026/11/01</small></article>",
    "<article class=\"tool\" data-group=\"workflow\"><div class=\"tool-top\"><span class=\"tool-logo\">↬</span><span class=\"tool-type\">流程串接</span></div><h3>Make / Zapier</h3><p>依事件或條件串接應用程式，也能整合 AI 步驟。</p><a href=\"https://www.make.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Make 官網 ↗</a> <a href=\"https://zapier.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Zapier 官網 ↗</a><small>自動化平台 · 查核 2026/11/01</small></article>"
  ],
  "filters": [
    {
      "category": "all",
      "id": "market",
      "title": "全部工具"
    },
    {
      "category": "general",
      "id": "tools-general",
      "title": "通用助理"
    },
    {
      "category": "research",
      "id": "tools-research",
      "title": "研究／文件"
    },
    {
      "category": "creative",
      "id": "tools-creative",
      "title": "內容創作"
    },
    {
      "category": "workflow",
      "id": "tools-workflow",
      "title": "自動化"
    },
    {
      "category": "coding",
      "id": "tools-coding",
      "title": "程式開發"
    }
  ],
  "toolNote": "註：此處的「代表工具」不是市場占有率排序；產品入口、模型開放範圍及付費權益可能因地區、方案或組織設定不同。資料日期和官方文件請見頁末。",
  "contentDate": "2026/11/01"
};
window.scenarios = {
        chat:{title:"人主導問答，AI 提供內容",description:"一個問題一個回答，適合快速發想與製作草稿。若未提供資料或開啟搜尋，AI 不保證內容是最新的。",steps:["使用者：請整理本月 AI 趨勢。","AI 產出初稿，使用者檢查和補充資料。","使用者再要求修改格式或用語。"],output:"成果：一份需要人工核實來源的報告草稿"},
        research:{title:"AI 蒐集多個來源，整理研究報告",description:"使用者定義題目、時間範圍與來源要求，AI 著重研究與證據整合。",steps:["指定本月、主要廠商、官方來源優先。","AI 搜尋官方公告與技術文件，交叉比較。","產出附來源及日期的研究摘要，交由人員核查。"],output:"成果：可追溯來源的研究報告"},
        workflow:{title:"流程固定，適合定期自動化",description:"設定好工作路徑和觸發條件後，每次按既定步驟執行。",steps:["每月 1 日自動啟動。","讀取指定資料來源 → AI 摘要 → 填寫固定模板。","將結果寄送主管審核，異常時通知人員。"],output:"成果：穩定、可重複的每月報表流程"},
        agent:{title:"目標導向，AI 動態決定下一步",description:"給 AI 任務目標與允許的工具，它可根據過程中的發現調整執行策略；重要動作仍應先核准。",steps:["設定目標：每月交付具來源的產業趨勢簡報。","AI 自行決定研究子題、蒐集資料、比對衝突。","使用授權工具製作文件，送交人工確認。"],output:"成果：跨步驟完成的工作交付，需監督與審核"}
      };
window.quizItems = [
        {q:"請 AI 把一段文字改寫成正式公文語氣，通常哪一種最合適？",options:["Chat 對話","Workflow 自動化","Multi-Agent 多代理"],correct:0,why:"單次文字調整用 Chat 即可，通常不需要跨系統自動化。"},
        {q:"每天收到新表單，就依固定規則存檔並通知承辦人，通常哪種更適合？",options:["Deep Research","Workflow 自動化","圖像生成 AI"],correct:1,why:"明確的觸發條件與固定步驟，是 Workflow 的典型場景。"},
        {q:"調查多家廠商最新技術、動態決定研究步驟並使用工具完成報告，較接近哪一種？",options:["單純文案改寫","AI Agent","傳統分類模型"],correct:1,why:"目標導向、動態拆解步驟與使用工具，是 AI Agent 的典型能力；僅需資料研究時也可使用 Deep Research。"}
      ];
