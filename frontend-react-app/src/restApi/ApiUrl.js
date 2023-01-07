class ApiUrl{
    
    // base url (backend app)
    static baseUrl = 'http://127.0.0.1:8000/api';

    //------------- home ------------------
    static topBannerContent = this.baseUrl+'/home/topBanner/getTopBannerContent';
    static serviceUrl = this.baseUrl+'/service/getAllService';
    static technologyChartDataUrl = this.baseUrl+'/getAllTechnologies';
    static technologyDesUrl = this.baseUrl+'/home/technology/getTechnologyDescription';
    static getThreeProjectUrl = this.baseUrl+'/project/getThreeProject';
    static getFourCoursetUrl = this.baseUrl+'/course/getFourCourse';
    static getVideoContenetUrl = this.baseUrl+'/home/video/getVideoInfo';
    static getallClientReviewUrl = this.baseUrl+'/getAllClientReviews';

    //------------- About & legal------------------
    static getCommonLegalUrl = this.baseUrl+'/legal/getLegalContent';

    //------------- Course ------------------
    static getAllCoursetUrl = this.baseUrl+'/course/getAllCourse';

    //------------- Project ------------------
    static getAllProjectUrl = this.baseUrl+'/project/getAllProject';

    //------------- Footer ------------------
    static getFooterContentUrl = this.baseUrl+'/footer/getFooterContent';
    

}

export default ApiUrl;