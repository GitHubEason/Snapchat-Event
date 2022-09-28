import React from "react";
import styled from "styled-components";
import Next from "./components/Next";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 850px;
	width: 100%;
	background-color: #e9dfff;
	@media (max-width: 1024px) {
		height: 100%;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const Container = styled.div`
	&,
	& * {
		box-sizing: border-box;
		display: block;
	}
	font-size: 1rem;
	line-height: 1.5rem;
	width: 440px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 1.5rem;
	padding: 1rem 0.75rem;
	border: 1px solid lightgrey;
	border-radius: 4px;
`;

const EventSchema = Yup.object().shape({
	eventName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	hostName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	startDate: Yup.string().required("Required"),
	endDate: Yup.string().required("Required"),
	location: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});

const EventForm = () => (
	<Wrapper>
		<Container>
			<h1>Create an Event</h1>
			<Formik
				initialValues={{
					eventName: "",
					hostName: "",
					startDate: "",
					endDate: "",
					location: "",
					eventPhoto: "",
				}}
				validationSchema={EventSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ errors, values, touched, setFieldValue }) => (
					<Form>
						<label htmlFor="eventName">Event Name</label>
						<Field name="eventName" />
						{errors.eventName && touched.eventName ? <div>{errors.eventName}</div> : null}
						<label htmlFor="hostName">Host Name</label>
						<Field name="hostName" />
						{errors.hostName && touched.hostName ? <div>{errors.hostName}</div> : null}
						<label htmlFor="startDate">Start Date</label>
						<DatePicker
							selected={values.startDate}
							dateFormat="MMMM d, yyyy"
							className="form-control"
							name="startDate"
							onChange={(date) => setFieldValue("startDate", date)}
						/>
						<label htmlFor="endDate">End Date</label>
						<DatePicker
							selected={values.endDate}
							dateFormat="MMMM d, yyyy"
							className="form-control"
							name="endDate"
							onChange={(date) => setFieldValue("endDate", date)}
						/>
						<label htmlFor="location">location</label>
						<Field name="location" />
						{errors.location && touched.location ? <div>{errors.location}</div> : null}
						<Next type="submit">Next</Next>
					</Form>
				)}
			</Formik>
		</Container>
	</Wrapper>
);

export default EventForm;
