const applicationFormTemplate_attachmentPart= `

        <fieldset>

            <legend>Attachments</legend>

            <div class="file-loading col-sm-11">
                <input id="input-fa-1" name="input-fa-1[]" type="file" multiple>
            </div>


        </fieldset>
        

                  `

const applicationFormTemplate_NotesPart =`
  

    <fieldset>

            <legend>Notes Details</legend>

            <div class="form-group">
                <label class="col-sm-1 ">Notes</label>

                <div class="col-xs-4">
                    <input id="note[0].title" name="note[0].title" type="text" class="form-control" placeholder="Title">
                </div>

                <div class="col-xs-5">
                    <textarea id="note[0].summary" name="note[0].summary" type="text" class="form-control" placeholder="Summary"></textarea>
                </div>

                <div class="col-xs-2">
                    <button  type="button" class="btn btn-default addNoteButton"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span></button>
                </div>

            </div>

            <!-- The template for adding new field -->
            <div class="form-group hide" id="noteTemplate">

                <div class="col-xs-4 col-xs-offset-1">
                    <input id="title" name="title" type="text" class="form-control" placeholder="Title">
                </div>

                <div class="col-xs-5">
                    <textarea id="summary" name="summary" type="text" class="form-control" placeholder="Summary"></textarea>
                </div>

                <div class="col-xs-2">
                    <button type="button" class="btn btn-default removeNoteButton"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span></button>
                </div>
            </div>

        </fieldset>

        

    `;

const applicationFormTemplate_part2 = `
     <div class="form-group">
                <label for="gradeApplyingFor" class="control-label col-sm-4"> Grade Applying for:  </label>
                <div class="col-sm-5">
                    <select id="gradeApplyingFor" name="gradeApplyingFor" class="form-control">
                        <option value="g1"> G1 - Grade 1</option>
                        <option value="g2"> G2 - Grade 2</option>
                        <option value="g3"> G3 - Grade 3</option>
                        <option value="g4"> G4 - Grade 4</option>
                        <option value="g5"> G5 - Grade 5</option>
                        <option value="g6"> G6 - Grade 6</option>
                        <option value="g7"> G7 - Grade 7</option>
                        <option value="g8"> G8 - Grade 8</option>
                        <option value="g9"> G9 - Grade 9</option>
                        <option value="g10"> G10 - Grade 10</option>
                        <option value="g11"> G11 - Grade 11</option>
                        <option value="g12"> G12 - Grade 12</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label for="applicationStatus" class="control-label col-sm-4"> Status:  </label>
                <div class="col-sm-5">
                    <select id="applicationStatus" name="applicationStatus" class="form-control">
                        <option value="g1"> Pending </option>
                        <option value="g2"> Accepted</option>
                        <option value="g3"> Rejected</option>
                        <option value="g3"> Withdrawn</option>
                    </select>
                </div>
            </div>

            <!-- Current School Grade, Grade applying for, Name of Current School -->

        </fieldset>
        
        
           
`;

const applicationFormTemplate_tests = `
    <fieldset>
            <legend>Admission Tests Results</legend>

         
            <div class="form-group">
                <label class="col-sm-1 ">Tests</label>

                <div class="col-xs-2">
                    <select id="test[0].testType" name="test[0].testType" class="form-control">
                        <option value="g1"> Types of Tests </option>
                    </select>
                </div>

                <div class="col-xs-2">
                    <input id="test[0].score" name="test[0].score" type="number" class="form-control" placeholder="Score">
                </div>

                <div class="col-xs-5">
                    <textarea id="test[0].comment" name="test[0].comment" type="text" class="form-control" placeholder="Comment"></textarea>
                </div>

                <div class="col-xs-2">
                    <button  type="button" class="btn btn-default addTestButton"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span></button>
                </div>

            </div>

            <!-- The template for adding new field -->
            <div class="form-group hide" id="testTemplate">
                <div class="col-xs-2 col-xs-offset-1">
                    <select id="testType" name="testType" class="form-control">
                        <option value="g1"> Types of Tests </option>
                    </select>
                </div>
                <div class="col-xs-2">
                    <input id="score" name="score" type="number" class="form-control" placeholder="Score">
                </div>
                <div class="col-xs-5">
                    <textarea id="comment" name="comment" type="text" class="form-control" placeholder="Comment"></textarea>
                </div>

                <div class="col-xs-2">
                    <button type="button" class="btn btn-default removeTestButton"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span></button>
                </div>
            </div>

        </fieldset>`

const applicationFormTemplate =`

    <br>
    <form class="form-horizontal applicationForm" method="post" action="">

        <fieldset>
            <legend>Personal Information</legend>

            <div class="form-group">
                <div class="col-sm-4"><label>First name</label><input type="text" class="form-control" placeholder="FirstName"></div>
                <div class="col-sm-5"><label>Last name</label><input type="text" class="form-control" placeholder="LastName"></div>
            </div>

            <div class="form-group">
                <label for="birthData" class="control-label col-sm-4">Date of Birth:</label>
                <div class="col-sm-5">
                    <input type="date"  class="form-control" id="birthData" name="birthData" ></div>
            </div>


            <div class="form-group">
                <label class="control-label col-sm-4">Gender : </label>
                <div class="col-sm-5">
                    <label class="radio-inline">
                        <input type="radio" name="gender" id="male" value="male"> Male
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="gender" id="female" value="female"> Female
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="currentSchool" class="control-label col-sm-4"> Name of Current School: </label>
                <div class="col-sm-5">
                    <input type="text" maxlength="50" class="form-control" id="currentSchool" name="currentSchool"></div>
            </div>


            <div class="form-group">
                <label for="currentSchoolGrade" class="control-label col-sm-4"> Current School Grade:  </label>
                <div class="col-sm-5">
                    <select id="currentSchoolGrade" name="currentSchoolGrade" class="form-control">
                        <option value="g1"> G1 - Grade 1</option>
                        <option value="g2"> G2 - Grade 2</option>
                        <option value="g3"> G3 - Grade 3</option>
                        <option value="g4"> G4 - Grade 4</option>
                        <option value="g5"> G5 - Grade 5</option>
                        <option value="g6"> G6 - Grade 6</option>
                        <option value="g7"> G7 - Grade 7</option>
                        <option value="g8"> G8 - Grade 8</option>
                        <option value="g9"> G9 - Grade 9</option>
                        <option value="g10"> G10 - Grade 10</option>
                        <option value="g11"> G11 - Grade 11</option>
                        <option value="g12"> G12 - Grade 12</option>
                    </select>
                </div>
            </div>

                    ${applicationFormTemplate_part2}

                    ${applicationFormTemplate_tests} 
                    
                    ${applicationFormTemplate_NotesPart}
                    
                    ${applicationFormTemplate_attachmentPart}
                    
                    <input class="btn btn-primary" type="submit" value="Submit">
                    <input class="btn btn-primary" type="reset" value="Reset">

                    <br> <br>

                </form>
    `;



document.addEventListener("DOMContentLoaded", () => {
    console.log("js-DOM fully loaded and parsed");
    if ( document.querySelector('#applicationForm').innerHTML  != null )
    {
        const formTemplate = Handlebars.compile(applicationFormTemplate);
        document.querySelector('#applicationForm').innerHTML = formTemplate();
    }

})


$( document ).ready(function() {
    testIndex=0;
    noteIndex=0;
    $('.applicationForm')
    // Add button click handler
        .on('click', '.addTestButton', function () {
            testIndex++;
            let $template = $('#testTemplate'),
                $clone = $template
                    .clone()
                    .removeClass('hide')
                    .removeAttr('id')
                    .attr('data-test-index', testIndex)
                    .insertBefore($template);

            // Update the name attributes
            $clone
                .find('[name="testType"]').attr('name', 'test[' + testIndex + '].testType').end()
                .find('[name="score"]').attr('name', 'test[' + testIndex + '].score').end()
                .find('[name="comment"]').attr('name', 'test[' + testIndex + '].comment').end();
        })

        // Remove button click handler
        .on('click', '.removeTestButton', function () {
            var $row = $(this).parents('.form-group'),
                index = $row.attr('data-test-index');


            // Remove element containing the fields
            $row.remove();
        })

        .on('click', '.addNoteButton', function () {
            noteIndex++;
            let $template = $('#noteTemplate'),
                $clone = $template
                    .clone()
                    .removeClass('hide')
                    .removeAttr('id')
                    .attr('data-note-index', noteIndex)
                    .insertBefore($template);

            // Update the name attributes
            $clone
                .find('[name="title"]').attr('name', 'note[' + noteIndex + '].title').end()
                .find('[name="summary"]').attr('name', 'note[' + noteIndex + '].summary').end()
        })

        // Remove button click handler
        .on('click', '.removeNoteButton', function () {
            var $row = $(this).parents('.form-group'),
                index = $row.attr('data-note-index');


            // Remove element containing the fields
            $row.remove();
        })


    $("#input-fa-1").fileinput({
        theme: "gly",
        uploadUrl: "/file-upload-batch/2"
    });



});

function deleteApplication(){

    if (!confirm('Confirm withdraw?')) {
        return;
    }

}


async function addAttachment() {

    const formTemplate = Handlebars.compile(applicationFormTemplate_attachmentPart);

    const dialogTitle = "Add Attachment";
    const attachDialog = document.querySelector('#attachment-dialog');
    attachDialog.innerHTML = applicationFormTemplate_attachmentPart;

    attachDialog.style.display = '';

    attachDialog.showModal();


}

async function addNotes() {

    const formTemplate = Handlebars.compile(applicationFormTemplate_NotesPart);

    const dialogTitle = "Add Attachment";
    const attachDialog = document.querySelector('#note-dialog');
    attachDialog.innerHTML = formTemplate();

    attachDialog.style.display = '';

    attachDialog.showModal();


}