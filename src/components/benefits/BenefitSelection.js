import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBenefits, selectBenefitCheckBoxes } from "../../redux";
import "./Benefits.css";

function BenefitSelection(props) {
	useEffect(() => {
		fetchBenefits();
	}, []);
	const benefitsData = props.benefitsData;
	const fetchBenefits = props.fetchBenefits;

	const [catItems, setCatItems] = useState({
		basic: [],
		additional: [],
		optional: [],
	});

	const [isSubmitEnabled, setSubmitEnabled] = useState(false);

	useEffect(() => {
		console.log("useEffect catItems: ", catItems);
	}, [catItems]);

	const selectBenefit = (event, packageName, categoryName, catr) => {
		console.log("event.target.checked", event.target.checked);
		console.log("event.target.name", event.target.name);
		console.log("catr", catr);

		const checked = event.target.checked;
		const item = {
			name: event.target.name,
			categoryName: categoryName,
		};

		if (checked) {
			setSubmitEnabled([true]);
			setCatItems({
				...catItems,
				[packageName]: [...catItems[packageName], item],
			});
		} else {
			const index = catItems[packageName].findIndex(
				(element) => element.name === item.name
			);
			if (index > -1) {
				setCatItems({
					...catItems,
					[packageName]: [
						...catItems[packageName].slice(0, index),
						...catItems[packageName].slice(index + 1),
					],
				});
			} else {
				console.log("Not found");
			}
		}
	};

	const onSubmit = (values) => {
		console.log("catItems", catItems);
		props.selectBenefitCheckBoxes(catItems);
		props.history.push("/review");
	};

	return benefitsData.loading ? (
		<h2>Loading</h2>
	) : benefitsData.error ? (
		<h2>{benefitsData.error}</h2>
	) : benefitsData.benefits ? (
		<Fragment>
			<h1>
				<span>Select Benefits</span>
			</h1>
			{benefitsData.benefits.map(
				({ packageName, categories, benefits }, index) => (
					<section className="benefits-section" key={index}>
						<div className="benefits-section__header">
							<h2>{packageName} Benefits</h2>
							<div className="benefits-section__header-cb">
								<input
									type="checkbox"
									name={packageName}
									onChange={(event) => {}}
								/>
								<label>Include</label>
							</div>
						</div>
						<p>These will be part of your {packageName} package</p>
						<div className="benefits-section__categories">
							{categories.map((cat, j) => (
								<section className="benefits-section__category-section" key={j}>
									<h3>{cat.categoryName}</h3>
									<ul>
										{cat.benefits.map((ben, k) => (
											<li key={k}>
												<input
													type="checkbox"
													name={ben.benefitName}
													onChange={(event) => {
														selectBenefit(
															event,
															packageName.toLowerCase(),
															cat.categoryName,
															index
														);
													}}
												/>
												<label>{ben.benefitName}</label>
											</li>
										))}
									</ul>
								</section>
							))}
						</div>
					</section>
				)
			)}
			<div className="button-bar">
				<button type="submit" onClick={onSubmit} disabled={!isSubmitEnabled}>
					Review selection
				</button>
			</div>
		</Fragment>
	) : null;
}

const mapStateToProps = (state) => {
	// console.log("Comming 2" + state);
	return {
		benefitsData: state.benefits,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBenefits: () => dispatch(fetchBenefits()),
		selectBenefitCheckBoxes: (cat) => dispatch(selectBenefitCheckBoxes(cat)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitSelection);
