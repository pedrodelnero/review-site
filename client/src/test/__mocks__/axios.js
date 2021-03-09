const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => mockAxios);
mockAxios.post = jest.fn(() => mockAxios);
mockAxios.delete = jest.fn(() => mockAxios);
mockAxios.patch = jest.fn(() => mockAxios);

export default mockAxios;
