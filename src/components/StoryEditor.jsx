import React, { useState } from 'react';
import { ArrowLeft, Save, Image, Upload, X } from 'lucide-react';
import api from '../services/api.mjs';

const StoryEditor = ({ story, onBack, onCreate, onUpdate, saving }) => {
  const [formData, setFormData] = useState(story || {
    title: '',
    content: '',
    image: '',
    author: '',
    date: '',
    status: 'draft'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (story?._id) {
      await onUpdate(story._id, formData);
    } else {
      await onCreate(formData);
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    let backendUrl = '';
    if (import.meta && import.meta.env && import.meta.env.VITE_API_BASE_URL) {
      backendUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '');
    } else {
      backendUrl = 'http://localhost:5000';
    }

    const uploadUrl = backendUrl + '/api/upload/image';

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        alert('You are not logged in as admin.');
        return;
      }

      const res = await fetch(uploadUrl, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formDataUpload
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Image upload failed');
      }

      const data = await res.json();
      if (data.url || data.path) {
        setFormData(prev => ({ ...prev, image: data.url || data.path }));
      } else {
        alert('Image upload failed: No file path returned.');
      }
    } catch (e) {
      console.error('Image upload error:', e);
      alert('Image upload error: ' + (e.message || e));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Stories
        </button>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={16} />
          {saving ? 'Saving...' : 'Save Story'}
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {story?._id ? 'Edit Story' : 'Create New Story'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 transition-colors">
                <input
                  type="file"
                  accept="image/*,.svg,.webp,.bmp,.tiff,.ico"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleImageUpload(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                  id="story-image-upload"
                />
                <label
                  htmlFor="story-image-upload"
                  className="flex items-center gap-3 cursor-pointer text-indigo-600 hover:text-indigo-700"
                >
                  <Upload size={20} />
                  <span className="font-medium">Upload Image</span>
                </label>
                {formData.image && (
                  <div className="flex items-center gap-2">
                    <img src={formData.image} alt="Story" className="w-12 h-12 object-cover rounded border" />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
              {formData.image && (
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Image URL"
                />
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoryEditor;
