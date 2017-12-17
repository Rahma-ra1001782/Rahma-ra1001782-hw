const applicatFormTemplate_addressPart= `
                  <fieldset>
                        <legend>Employer Details</legend>
                        <div class="form-group">
                            <label class="col-sm-2" for="employerName"> Employer Name </label>
                            <div class="col-sm-5"><input type="text" class="form-control" id="employerName" name="employerName"></div>
                        </div>
                        <div class="form-group">
                            <label for="employerCountry" class="col-sm-2">Country</label>
                            <div class="col-sm-5">
                                <select id="employerCountry" name="employerCountry" class="form-control">
                                    <option value="">World countries list .... </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="employerCity" class="col-sm-2">City </label>
                            <div class="col-sm-5">
                                <select id="employerCity" name="employerCity" class="form-control">
                                
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2" for="employerStreet"> Street </label>
                            <div class="col-sm-5"><input type="text" class="form-control" id="employerStreet" name="employerStreet"></div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Residence Details</legend>
                        <div class="form-group">
                            <label for="employerCountry" class="col-sm-2">Country</label>
                            <div class="col-sm-5">
                                <select id="residenceCountry" name="residenceCountry" class="form-control">
                                    <option value="">World countries list .... </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="residenceCity" class="col-sm-2">City </label>
                            <div class="col-sm-5">
                                <select id="residenceCity" name="residenceCity" class="form-control">
                                    <option value="">Cities based on selected country </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2" for="residenceStreet"> Street </label>
                            <div class="col-sm-5"><input type="text" class="form-control" id="residenceStreet" name="residenceStreet"></div>
                        </div>
                    </fieldset>`

const applicantFormTemplate =`
     <form role="form" class="form-horizontal" id="applicantForm">
                    <fieldset>
                        <legend>Personal Information</legend>
                        <div class="form-group">
                            <div class="col-sm-4"><label>First name</label><input type="text" class="form-control" placeholder="FirstName"></div>
                            <div class="col-sm-5"><label>Last name</label><input type="text" class="form-control" placeholder="LastName"></div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-4" for="nationalId">National ID</label>
                            <div class="col-sm-5"><input type="text" class="form-control" id="nationalId"></div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-4" for="relationship"> Relationship to the student</label>
                            <div class="col-sm-5"><input type="text" class="form-control" id="relationship"></div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Contact Information</legend>
                        <div class="form-group">
                            <label class="col-sm-2" for="applicantEmail">Email</label>
                            <div class="col-sm-5"> <input type="email" class="form-control" id="applicantEmail" name="applicantEmail" placeholder="username@example.com"></div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2" for="homePhone">Home phone </label>
                            <div class="col-sm-5"><input type="tel" class="form-control" id="homePhone" name="homePhone"></div>
                        </div>
    
                        <div class="form-group">
                            <label class="col-sm-2" for="mobile">Mobile </label>
                            <div class="col-sm-5"><input type="tel" class="form-control" id="mobile" name="mobile"></div>
                        </div>
                    </fieldset>
                    <br>
                    
                    ${applicatFormTemplate_addressPart}
                    
                    <input class="btn btn-primary" type="submit" value="Submit">
                    <input class="btn btn-primary" type="reset" value="Reset">

                    <br> <br>

                </form>
    `;




document.addEventListener("DOMContentLoaded", () => {
    console.log("js-DOM fully loaded and parsed");
    document.querySelector('#contact_01').innerHTML = applicantFormTemplate;
})


//Change this later to use DOM selectors
$( document ).ready(function() {
    $(".nav-tabs").on("click", "a", function (e) {
        e.preventDefault();
        console.log('this element ' + $(this))
        if (!$(this).hasClass('add-contact')) {
            $(this).tab('show');
        }
    })
        .on("click", "span", function () {
            var anchor = $(this).siblings('a');
            $(anchor.attr('href')).remove();
            $(this).parent().remove();
            $(".nav-tabs li").children('a').first().click();
        });
    $('.add-contact').click(function (e) {
        e.preventDefault();
        var id = $(".nav-tabs").children().length;
        var tabId = 'contact_' + id;
        $(this).closest('li').before('<li><a href="#contact_' + id + '">New Contact</a></li>');
        $('.tab-content').append('<div class="tab-pane" id="' + tabId + '">' +
            ` ${applicantFormTemplate}` + id + '</div>');
        $('.nav-tabs li:nth-child(' + id + ') a').click();
    });
});