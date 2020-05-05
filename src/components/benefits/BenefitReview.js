import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import "./Review.css";

const BenefitReview = (props) => {
	console.log("Review props", props.selectedBenefits);

	const { push } = useHistory();

	const capitalize = (s) => {
		if (typeof s !== "string") return "";
		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	return (
		<Fragment>
			<h1>
				<span>Review</span>
			</h1>
			<section className="review-section">
				<p>Review your selection before accepting</p>
				<ul>
					<li>
						{Object.keys(props.selectedBenefits).map((key, index) => (
							<>
								<div
									className="review-section__package-label"
									key={index.toString()}
								>
									{capitalize(key)} benefits
								</div>
								<ul>
									{props.selectedBenefits[key].map((item, index2) => (
										<li key={index2}>
											<div className="review-section__category-label">
												{item.categoryName}
											</div>
											<ul>
												<li className="review-section__benefit-label">
													{item.name}
												</li>
											</ul>
										</li>
									))}
								</ul>
							</>
						))}
					</li>
				</ul>
			</section>
			<div className="button-bar">
				{/** Back button routes back to '/' which loads selection */}
				<button onClick={() => push("/")}>Back</button>
				{/** Keep Accept button disabled */}
				<button>Accept</button>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	// console.log("Comming 2" + state);
	return {
		selectedBenefits: state.benefits.selectedBenefits,
	};
};
export default connect(mapStateToProps)(BenefitReview);
