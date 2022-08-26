import * as React from 'react'

interface ProjectPayload {
    developmant_name: string
    project_title: string
    discipline: string
    project_no: number
    transittal_id: any
    reference: number
    contract_type: string
    contract_scope: string
    date_issued: Date
    document_type: string
    description: any
    additional_comments: any
    remarks: any
    link: any
    email_address: any
    share_for: string
    submitted_for: string
}

class CreateProject extends React.Component {

    projectPayload: ProjectPayload = {
        developmant_name: '',
        project_title: '',
        discipline: '',
        project_no: null,
        transittal_id: '',
        reference: null,
        contract_type: '',
        contract_scope: '',
        date_issued: null,
        document_type: '',
        description: '',
        additional_comments: '',
        remarks: '',
        link: '',
        email_address: '',
        share_for: '',
        submitted_for: ''
    }

    getProjectPayload() {
        let payload: any = {
            attributes: {
                developmant_name: this.projectPayload.developmant_name,
                project_title: this.projectPayload.project_title,
                discipline: this.projectPayload.discipline,
                project_no: this.projectPayload.project_no,
                transittal_id: this.projectPayload.transittal_id,
                reference: this.projectPayload.reference,
                contract_type: this.projectPayload.contract_type,
                contract_scope: this.projectPayload.contract_scope,
                date_issued: this.projectPayload.date_issued,
                document_type: this.projectPayload.document_type,
                description: this.projectPayload.description,
                additional_comments: this.projectPayload.additional_comments,
                remarks: this.projectPayload.remarks,
                link: this.projectPayload.link,
                email_address: this.projectPayload.email_address,
                share_for: this.projectPayload.share_for,
                submitted_for: this.projectPayload.submitted_for
            }
        }
    }


    handleSubmit (){

    }






    render() {
        return (
            <div>
                {/* <form onSubmit={(e) => { this.handleSubmit() }}> */}
                <form>
                    <label >
                        Name:
                    </label><br />
                    <input type="text" required  /><br />
                    <label >
                        Age:
                    </label><br />
                    <input type="text"  required  /><br />
                    <label>
                        Email:
                    </label><br />
                    <input type="email" required  /><br />
                    <label>
                        Password:
                    </label><br />
                    <input type="text"  required /><br />
                    <label>
                        Confirm Password:
                    </label><br />
                    <input type="text"  /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default CreateProject