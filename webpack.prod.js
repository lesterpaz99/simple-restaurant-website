const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [
			'...',
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						// Lossless optimization with custom option
						// Feel free to experiment with options for better result for you
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							// Svgo configuration here https://github.com/svg/svgo#configuration
							[
								'svgo',
								{
									plugins: [
										{
											name: 'preset-default',
											params: {
												overrides: {
													removeViewBox: false,
													addAttributesToSVGElement: {
														params: {
															attributes: [
																{ xmlns: 'http://www.w3.org/2000/svg' },
															],
														},
													},
												},
											},
										},
									],
								},
							],
						],
					},
				},
			}),
		],
	},
});
