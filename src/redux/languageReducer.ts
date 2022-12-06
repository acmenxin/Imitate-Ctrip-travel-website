import i18n from "i18next";

export interface LanguageState {
    language: "en" | "zh",
    languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "英文", code: "en" }
    ]
}
export default (state = defaultState, action: any) => {
    switch (action.type) {
        case "change_language":
            i18n.changeLanguage(action.payload);//调用改变语言的api，非纯函数，不是很标准（应使用中间件）
            return { ...state, language: action.payload };
        case "add_language":
            return {
                ...state,
                languageList: [...state.languageList, action.payload],
            };
        default:
            return state;
    }
}
//处理语言的配置信息，返回新的state