class ApiUrl{
    
    // base url (backend app)
    static baseUrl = 'http://127.0.0.1:8000/api';

    //------------- home ------------------
    static topBannerContent = this.baseUrl+'/home/topBanner/getTopBannerContent';
    static serviceUrl = this.baseUrl+'/service/getAllService';
    static getThreeProjectUrl = this.baseUrl+'/project/getThreeProject';
    static getFourCoursetUrl = this.baseUrl+'/course/getFourCourse';
    static getallClientReviewUrl = this.baseUrl+'/getAllClientReviews';

}

export default ApiUrl;