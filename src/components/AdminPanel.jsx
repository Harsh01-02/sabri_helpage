import React, { useEffect, useMemo, useState } from 'react';
import { LayoutDashboard, FileText, Settings, Menu, X, Search, Edit, Check, Archive, Trash2, Users, Lock, UserPlus, LogIn, ChevronRight, Plus, GripVertical, Image, Layout, Shield, UserCog, Eye, Globe, Palette, Bell, Database, Package, LogOut } from 'lucide-react';
import api from '../services/api.mjs';
import { usePagesStore } from '../stores/pageInformationSlice';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubsection, setSelectedSubsection] = useState('global');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingSection, setEditingSection] = useState(null);
  const [expandedSections, setExpandedSections] = useState(new Set());

  // Collapse all sections by default when page loads or selectedPage changes
  useEffect(() => {
    setExpandedSections(new Set());
  }, [selectedPage]);
  const [pageDoc, setPageDoc] = useState(null);
  
  // Get pages from Zustand store
  const storePages = usePagesStore((state) => state.pages);
  const storeLoading = usePagesStore((state) => state.loading);
  const storeError = usePagesStore((state) => state.error);
  const fetchPages = usePagesStore((state) => state.fetchPages);
  const getPageBySlug = usePagesStore((state) => state.getPageBySlug);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [roles, setRoles] = useState([
    {
      id: 'admin',
      name: 'Administrator',
      icon: Shield,
      color: 'border-blue-200 bg-blue-50',
      permissions: 'Full access to all features',
    },
    {
      id: 'editor',
      name: 'Editor',
      icon: Edit,
      color: 'border-purple-200 bg-purple-50',
      permissions: 'Can create and edit content',
    },
    {
      id: 'author',
      name: 'Author',
      icon: FileText,
      color: 'border-green-200 bg-green-50',
      permissions: 'Can write and manage own content',
    },
    {
      id: 'subscriber',
      name: 'Subscriber',
      icon: Users,
      color: 'border-gray-200 bg-gray-50',
      permissions: 'Can read content and manage profile',
    }
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pages', label: 'Pages', icon: FileText },
    { id: 'global', label: 'Global Settings', icon: Globe },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // Compute dashboard stats from storePages
  const totalPages = storePages.length;
  const publishedPages = storePages.filter(p => p.status === 'published').length;
  const draftPages = storePages.filter(p => p.status === 'draft').length;
  const archivedPages = storePages.filter(p => p.status === 'archived').length;
  const stats = [
    { label: 'Total Pages', value: totalPages, icon: FileText },
    { label: 'Published', value: publishedPages, icon: Check },
    { label: 'Draft', value: draftPages, icon: Edit },
    { label: 'Archived', value: archivedPages, icon: Archive }
  ];

  // Helper to detect image fields (move to top-level so it's in scope)
  const isImageField = (label) => {
    const l = label.toLowerCase();
    return (
      l === 'image' ||
      l === 'img' ||
      l === 'url' ||
      l === 'src' ||
      l === 'href' ||
      l === 'link' ||
      l.endsWith('_image') ||
      l.endsWith('_img') ||
      l.endsWith('_url') ||
      l.endsWith('_src') ||
      l.includes('img') ||
      l.includes('image') ||
      l.includes('url') ||
      l.includes('src')
    );
  };

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userDataStr = localStorage.getItem('adminUser');

    if (token && userDataStr) {
      try {
        const userData = JSON.parse(userDataStr);
        if (userData && (userData.email || userData.role)) {
          setUser({ email: userData.email || 'admin', role: userData.role || 'admin' });
        } else {
          // Invalid user data, clear storage
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminUser');
        }
      } catch (e) {
        console.error('Error parsing user data:', e);
        // Clear corrupted data
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
      }
    }
  }, []);

  // Fetch pages from store when active section changes to pages
  useEffect(() => {
    if (activeSection !== 'pages') return;
    
    // Fetch pages if store is empty
    if (storePages.length === 0) {
      fetchPages();
    }
  }, [activeSection, storePages.length, fetchPages]);
  
  // Sync store loading/error states
  useEffect(() => {
    if (activeSection === 'pages') {
      setLoading(storeLoading);
      if (storeError) {
        setError(storeError);
      }
    }
  }, [activeSection, storeLoading, storeError]);

  useEffect(() => {
    if (!selectedPage) {
      setPageDoc(null);
      return;
    }
    
    // Get page data from store instead of making API call
    const pageData = getPageBySlug(selectedPage);
    if (pageData) {
      setPageDoc(pageData);
      setError('');
    } else {
      // If page not found in store, it might not be loaded yet
      setError('Page not found. Please refresh the pages list.');
      setPageDoc(null);
    }
  }, [selectedPage, getPageBySlug]);

  useEffect(() => {
    if (activeSection !== 'contacts') return;
    setLoading(true);
    const token = localStorage.getItem('adminToken');
    fetch('/api/admin/contacts', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(r => r.ok ? r.json() : [])
      .then(data => setContacts(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, [activeSection]);

  // Extract slugs from store pages and filter
  const filteredPages = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    // Extract slugs from page objects in store
    const pageSlugs = storePages
      .map(page => page.slug || page.name || String(page))
      .filter(Boolean);
    
    return pageSlugs.filter(slug => slug.toLowerCase().includes(term));
  }, [storePages, searchTerm]);

  const handleLogout = async () => {
    try {
      await api.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear local storage and reset user state
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      setUser(null);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const result = await api.login(loginForm.email, loginForm.password);
      if (result.success) {
        setUser({ email: result.user?.email || loginForm.email, role: result.user?.role || 'admin' });
        setLoginForm({ email: '', password: '' });
      } else {
        setLoginError(result.message || 'Login failed');
      }
    } catch (error) {
      setLoginError(error.message || 'An error occurred during login');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const pageTemplates = useMemo(() => {
    if (!pageDoc || !Array.isArray(pageDoc.sections)) return {};
    return {
      [selectedPage || '']: {
        sections: pageDoc.sections.map((s, idx) => ({ key: s.key || `section-${idx}`, ...s }))
      }
    };
  }, [pageDoc, selectedPage]);

  // Helper to get field descriptions
  const getFieldDescription = (label) => {
    const l = label.toLowerCase();
    const descriptions = {
      title: 'Main heading for this section',
      headline: 'Primary title that appears prominently',
      heading: 'Section heading text',
      subtitle: 'Secondary text that provides additional context',
      description: 'Detailed explanation or content',
      content: 'Main body text or content',
      text: 'Text content for display',
      summary: 'Brief overview or summary',
      excerpt: 'Short preview or excerpt',
      caption: 'Descriptive text for images or media',
      alt: 'Alternative text for accessibility',
      url: 'Web address or link',
      link: 'Clickable link destination',
      href: 'Hyperlink reference',
      src: 'Source URL for media',
      image: 'Image file or URL',
      icon: 'Icon identifier or URL',
      color: 'Color value (hex, rgb, or name)',
      background: 'Background color or image',
      button: 'Button text or label',
      label: 'Display label for form elements',
      placeholder: 'Hint text shown in empty fields',
      name: 'Identifier or display name',
      email: 'Email address',
      phone: 'Phone number',
      address: 'Physical or mailing address',
      date: 'Date value',
      time: 'Time value',
      duration: 'Length of time',
      price: 'Cost or pricing information',
      amount: 'Quantity or monetary value',
      count: 'Number of items',
      limit: 'Maximum allowed value',
      min: 'Minimum allowed value',
      max: 'Maximum allowed value',
      step: 'Increment value',
      type: 'Content or element type',
      category: 'Classification or grouping',
      tag: 'Keyword or label',
      status: 'Current state or condition',
      priority: 'Importance level',
      order: 'Display or processing order',
      position: 'Placement or arrangement',
      size: 'Dimensions or scale',
      width: 'Horizontal dimension',
      height: 'Vertical dimension',
      margin: 'Outer spacing',
      padding: 'Inner spacing',
      border: 'Border styling',
      radius: 'Corner rounding',
      shadow: 'Drop shadow effect',
      opacity: 'Transparency level',
      visible: 'Visibility state',
      enabled: 'Enabled/disabled state',
      required: 'Required field indicator',
      readonly: 'Read-only state',
      disabled: 'Disabled state',
      hidden: 'Hidden state',
      collapsed: 'Collapsed state',
      expanded: 'Expanded state',
      active: 'Active state',
      selected: 'Selected state',
      checked: 'Checked state',
      focused: 'Focus state',
      hovered: 'Hover state',
      clicked: 'Click state',
      loading: 'Loading state',
      error: 'Error state',
      success: 'Success state',
      warning: 'Warning state',
      info: 'Information state'
    };

    return descriptions[l] || null;
  };

  // Upload image and set URL
  const handleImageUpload = async (file, onChange) => {
    if (!file) {
      alert('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    let backendUrl = '';
    // Try to get backend URL from env or fallback
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
        body: formData
      });
      let data;
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok) {
        if (contentType.includes('application/json')) {
          data = await res.json();
          throw new Error(data.message || 'Image upload failed');
        } else {
          const text = await res.text();
          throw new Error(text);
        }
      } else {
        if (contentType.includes('application/json')) {
          data = await res.json();
        } else {
          throw new Error('Unexpected response from server');
        }
      }
      if (data.url || data.path) {
        onChange({ target: { value: data.url || data.path } });
      } else {
        alert('Image upload failed: No file path returned.');
      }
    } catch (e) {
      console.error('Image upload error:', e);
      alert('Image upload error: ' + (e.message || e));
    }
  };

  const renderFieldEditor = (label, value, onChange, type = 'text', placeholder = '') => {
    const isImageFieldValue = isImageField(label);
    const fieldDescription = getFieldDescription(label);
    if (isImageFieldValue) {
      return (
        <div key={label} className="space-y-1">
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-0.5 tracking-wide">{label}</label>
            {fieldDescription && (
              <p className="text-xs text-gray-400 mb-1 italic">{fieldDescription}</p>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
            <input
              type="file"
              accept="image/*,.svg,.webp,.bmp,.tiff,.ico"
              onChange={e => {
                if (e.target.files && e.target.files[0]) {
                  handleImageUpload(e.target.files[0], onChange);
                }
              }}
              className="text-xs file:mr-2 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700 file:px-2 file:py-1"
            />
            {value && value.startsWith('/') && (
              <div className="flex items-center gap-1">
                <img src={value} alt="preview" className="rounded h-8 w-8 object-cover border border-gray-200" />
                <span className="text-xs text-gray-400">Current</span>
              </div>
            )}
          </div>
        </div>
      );
    }
    if (type === 'textarea') {
      return (
        <div key={label} className="space-y-1">
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-0.5 tracking-wide">{label}</label>
            {fieldDescription && (
              <p className="text-xs text-gray-400 mb-1 italic">{fieldDescription}</p>
            )}
          </div>
          <textarea
            value={value || ''}
            onChange={onChange}
            className="w-full px-3 py-2 bg-gray-50 rounded-lg text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-none border-none shadow-sm placeholder-gray-400"
            rows={3}
            placeholder={placeholder || `Enter ${label.toLowerCase()}...`}
          />
          {isImageFieldValue && (
            <div className="flex items-center gap-2 mt-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
              <input
                type="file"
                accept="image/*,.svg,.webp,.bmp,.tiff,.ico"
                onChange={e => {
                  if (e.target.files && e.target.files[0]) {
                    handleImageUpload(e.target.files[0], onChange);
                  }
                }}
                className="text-xs file:mr-2 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700 file:px-2 file:py-1"
              />
              {value && value.startsWith('/') && (
                <div className="flex items-center gap-1">
                  <img src={value} alt="preview" className="rounded h-8 w-8 object-cover border border-gray-200" />
                  <span className="text-xs text-gray-400">Current</span>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    return (
      <div key={label} className="space-y-1">
        <div>
          <label className="block text-xs font-semibold text-gray-800 mb-0.5 tracking-wide">{label}</label>
          {fieldDescription && (
            <p className="text-xs text-gray-400 mb-1 italic">{fieldDescription}</p>
          )}
        </div>
        <input
          type={type}
          value={value || ''}
          onChange={onChange}
          className="w-full px-3 py-2 bg-gray-50 rounded-lg text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-none border-none shadow-sm placeholder-gray-400"
          placeholder={placeholder || `Enter ${label.toLowerCase()}...`}
        />
        {isImageFieldValue && (
          <div className="flex items-center gap-2 mt-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
            <input
              type="file"
              accept="image/*,.svg,.webp,.bmp,.tiff,.ico"
              onChange={e => {
                if (e.target.files && e.target.files[0]) {
                  handleImageUpload(e.target.files[0], onChange);
                }
              }}
              className="text-xs file:mr-2 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700 file:px-2 file:py-1"
            />
            {value && value.startsWith('/') && (
              <div className="flex items-center gap-1">
                <img src={value} alt="preview" className="rounded h-8 w-8 object-cover border border-gray-200" />
                <span className="text-xs text-gray-400">Current</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderArrayEditor = (label, items, onUpdate, itemType = 'object') => {
    if (!items || !Array.isArray(items)) return null;

    // Get common fields from existing items to use as template for new items
    const getCommonFields = () => {
      if (items.length === 0) return [];
      const firstItem = items.find(item => item && typeof item === 'object' && Object.keys(item).length > 0);
      return firstItem ? Object.keys(firstItem) : [];
    };

    const commonFields = getCommonFields();

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <label className="text-sm font-semibold text-gray-800">{label}</label>
            <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded-full border">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={() => {
              // Create new item with common fields initialized to empty strings
              const newItem = itemType === 'object'
                ? commonFields.reduce((acc, key) => ({ ...acc, [key]: '' }), {})
                : '';
              const updated = [...items, newItem];
              onUpdate(updated);
            }}
            className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-1"
          >
            <Plus size={12} />
            Add Item
          </button>
        </div>
        <div className="space-y-4 border border-gray-200 rounded-lg p-4 bg-white">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <Plus size={20} className="text-gray-400" />
              </div>
              <p className="text-sm mb-3">No items yet</p>
              <button
                onClick={() => {
                  const newItem = itemType === 'object'
                    ? commonFields.reduce((acc, key) => ({ ...acc, [key]: '' }), {})
                    : '';
                  onUpdate([newItem]);
                }}
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors"
              >
                Add First Item
              </button>
            </div>
          ) : (
            items.map((item, idx) => {
              const itemKeys = itemType === 'object' && item ? Object.keys(item) : [];
              const hasFields = itemKeys.length > 0;

              return (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-indigo-700">{idx + 1}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {itemType === 'object' ? 'Item' : 'Value'} {idx + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {itemType === 'object' && (
                        <button
                          onClick={() => {
                            const fieldName = prompt('Enter field name:');
                            if (fieldName && fieldName.trim()) {
                              const updated = [...items];
                              updated[idx] = { ...item, [fieldName.trim()]: '' };
                              onUpdate(updated);
                            }
                          }}
                          className="px-2 py-1 text-xs text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded transition-colors"
                          title="Add Field"
                        >
                          + Field
                        </button>
                      )}
                      <button
                        onClick={() => {
                          const updated = items.filter((_, i) => i !== idx);
                          onUpdate(updated);
                        }}
                        className="px-2 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                        title="Remove Item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {itemType === 'object' ? (
                    <div className="space-y-3">
                      {hasFields ? (
                        itemKeys.map((key) => (
                          <div key={key} className="flex items-start gap-3 p-3 bg-white rounded-md border border-gray-100">
                            <div className="flex-1">
                              {typeof item[key] === 'string' || typeof item[key] === 'number' ? (
                                renderFieldEditor(
                                  key,
                                  item[key],
                                  (e) => {
                                    const updated = [...items];
                                    updated[idx] = { ...item, [key]: e.target.value };
                                    onUpdate(updated);
                                  },
                                  key.toLowerCase().includes('description') || key.toLowerCase().includes('text') || key.toLowerCase().includes('content') ? 'textarea' : 'text'
                                )
                              ) : (
                                <div className="space-y-1">
                                  <label className="block text-xs font-medium text-gray-700 mb-1">{key}</label>
                                  <input
                                    type="text"
                                    value={JSON.stringify(item[key])}
                                    onChange={(e) => {
                                      try {
                                        const parsed = JSON.parse(e.target.value);
                                        const updated = [...items];
                                        updated[idx] = { ...item, [key]: parsed };
                                        onUpdate(updated);
                                      } catch {}
                                    }}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="JSON value"
                                  />
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => {
                                const updated = [...items];
                                const newItem = { ...item };
                                delete newItem[key];
                                updated[idx] = newItem;
                                onUpdate(updated);
                              }}
                              className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors mt-6"
                              title="Remove Field"
                            >
                              ×
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-4 text-sm text-gray-500 bg-gray-50 rounded-md">
                          <p className="mb-2">No fields in this item</p>
                          <button
                            onClick={() => {
                              const fieldName = prompt('Enter field name:');
                              if (fieldName && fieldName.trim()) {
                                const updated = [...items];
                                updated[idx] = { [fieldName.trim()]: '' };
                                onUpdate(updated);
                              }
                            }}
                            className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700 transition-colors"
                          >
                            Add First Field
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="block text-xs font-medium text-gray-700">Value</label>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const updated = [...items];
                          updated[idx] = e.target.value;
                          onUpdate(updated);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter value"
                      />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  const renderObjectEditor = (label, obj, onUpdate, path = '') => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;
    
    return (
      <div className="space-y-2 border border-gray-200 rounded-lg p-3 bg-gray-50">
        <label className="text-xs font-medium text-gray-700">{label}</label>
        {Object.keys(obj).map((key) => {
          const value = obj[key];
          const fieldPath = path ? `${path}.${key}` : key;
          
          if (typeof value === 'string' || typeof value === 'number') {
            return renderFieldEditor(
              key,
              value,
              (e) => {
                const updated = { ...obj, [key]: e.target.value };
                onUpdate(updated);
              }
            );
          } else if (Array.isArray(value)) {
            return renderArrayEditor(
              key,
              value,
              (updated) => {
                const newObj = { ...obj, [key]: updated };
                onUpdate(newObj);
              },
              typeof value[0] === 'object' ? 'object' : 'string'
            );
          } else if (typeof value === 'object' && value !== null) {
            return renderObjectEditor(
              key,
              value,
              (updated) => {
                const newObj = { ...obj, [key]: updated };
                onUpdate(newObj);
              },
              fieldPath
            );
          }
          return null;
        })}
      </div>
    );
  };

  const renderSectionEditor = (section) => {
    const sectionType = section.type || 'unknown';
    const sectionTitle = section.title || section.headline || section.heading || sectionType;
    const isExpanded = expandedSections.has(section.key);

    const toggleExpansion = () => {
      const newExpanded = new Set(expandedSections);
      if (newExpanded.has(section.key)) {
        newExpanded.delete(section.key);
      } else {
        newExpanded.add(section.key);
      }
      setExpandedSections(newExpanded);
    };

    return (
      <div key={section.key} className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div
          className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={toggleExpansion}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
              <Layout className="text-indigo-600" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">{sectionTitle}</h4>
              <p className="text-xs text-gray-500 capitalize">{sectionType} Section</p>
            </div>
          </div>
          <ChevronRight
            className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            size={16}
          />
        </div>

        {isExpanded && (
          <div className="px-5 pb-5 space-y-4">
            {/* Type field */}
            {renderFieldEditor(
              'Type',
              section.type,
              (e) => updateSection(section.key, { type: e.target.value })
            )}

            {/* Render all simple fields */}
            {Object.keys(section).filter(key =>
              key !== 'key' &&
              key !== 'type' &&
              typeof section[key] !== 'object' &&
              !Array.isArray(section[key])
            ).map((key, idx) => {
              const value = section[key];
              return (
                <React.Fragment key={key}>
                  {renderFieldEditor(
                    key,
                    value,
                    (e) => updateSection(section.key, { [key]: e.target.value }),
                    key.toLowerCase().includes('description') || key.toLowerCase().includes('text') || key.toLowerCase().includes('content') ? 'textarea' : 'text'
                  )}
                </React.Fragment>
              );
            })}

            {/* Render array fields */}
            {Object.keys(section).filter(key =>
              Array.isArray(section[key])
            ).map((key, idx) => {
              const items = section[key];
              return (
                <React.Fragment key={key}>
                  {renderArrayEditor(
                    key,
                    items,
                    (updated) => updateSection(section.key, { [key]: updated }),
                    items.length > 0 && typeof items[0] === 'object' ? 'object' : 'string'
                  )}
                </React.Fragment>
              );
            })}

            {/* Render object fields */}
            {Object.keys(section).filter(key =>
              typeof section[key] === 'object' &&
              section[key] !== null &&
              !Array.isArray(section[key]) &&
              key !== 'key'
            ).map((key, idx) => {
              const obj = section[key];
              return (
                <React.Fragment key={key}>
                  {renderObjectEditor(
                    key,
                    obj,
                    (updated) => updateSection(section.key, { [key]: updated })
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const updateSection = (key, patch) => {
    if (!pageDoc) return;
    const updated = { ...pageDoc };
    updated.sections = updated.sections.map(s => (s.key === key || s.key === undefined && (`section-${updated.sections.indexOf(s)}` === key)) ? { ...s, ...patch } : s);
    setPageDoc(updated);
  };

  const savePage = async () => {
    if (!selectedPage || !pageDoc) return;
    setLoading(true);
    setError('');
    try {
      const updatedPage = await api.updateAdminPage(selectedPage, { sections: pageDoc.sections });
      // Update the store with the updated page data
      const updatedPages = storePages.map(page => 
        page.slug === selectedPage ? updatedPage : page
      );
      usePagesStore.getState().setPages(updatedPages);
      // Update pageDoc with the response
      setPageDoc(updatedPage);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Show login form if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Sabri CMS</h1>
              <p className="text-gray-600 mt-2">Sign in to access the admin panel</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="admin@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-600">{loginError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoggingIn ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn size={18} />
                    Sign In
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Secure admin access required
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 transition-all duration-300 flex flex-col relative z-10 shadow-2xl`}>
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Sabri CMS
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">Content Management</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSelectedPage(null);
                  setSelectedItem(null);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-700">
          {sidebarOpen ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">System Online</span>
              </div>
              {user && (
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role || 'admin'}</p>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="w-full mt-2 px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all flex items-center gap-2"
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="h-2 w-2 bg-emerald-500 rounded-full mx-auto animate-pulse"></div>
              <button
                onClick={handleLogout}
                className="w-full p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all flex items-center justify-center"
              >
                <LogOut size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 capitalize">{activeSection}</h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage your {activeSection} content
              </p>
            </div>
            {activeSection !== 'dashboard' && activeSection !== 'settings' && activeSection !== 'contacts' && (
              <button
                onClick={() => setSelectedItem({ _id: null })}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 flex items-center gap-2"
              >
                <Plus size={16} />
                Create New
              </button>
            )}
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Dashboard */}
            {activeSection === 'dashboard' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="bg-white rounded-xl p-6 border-2 border-indigo-600 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
                            <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                          </div>
                          <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                            <Icon className="text-indigo-600" size={20} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {['pages', 'gallery', 'Events', 'faq'].map((section) => (
                      <button
                        key={section}
                        onClick={() => setActiveSection(section.toLowerCase())}
                        className="p-4 border-2 border-indigo-600 rounded-xl hover:border-indigo-700 hover:bg-indigo-50 transition-all text-center capitalize"
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs text-left">
                      <thead>
                        <tr className="text-gray-500 border-b">
                          <th className="py-2 pr-4">Page</th>
                          <th className="py-2 pr-4">Status</th>
                          <th className="py-2 pr-4">Last Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {storePages
                          .slice()
                          .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0))
                          .slice(0, 5)
                          .map((page, idx) => (
                            <tr key={page._id || page.slug || idx} className="border-b last:border-0">
                              <td className="py-2 pr-4 font-medium text-indigo-700 cursor-pointer hover:underline" onClick={() => { setActiveSection('pages'); setSelectedPage(page.slug); }}>{page.title || page.slug || 'Untitled'}</td>
                              <td className="py-2 pr-4 capitalize">{page.status || 'unknown'}</td>
                              <td className="py-2 pr-4">{page.updatedAt ? new Date(page.updatedAt).toLocaleString() : (page.createdAt ? new Date(page.createdAt).toLocaleString() : '—')}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Pages Management */}
            {activeSection === 'pages' && !selectedPage && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Search pages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPages.map((slug) => (
                    <button
                      key={slug}
                      onClick={() => setSelectedPage(slug)}
                      className="relative group bg-white rounded-xl p-6 border-2 border-indigo-600 shadow-sm hover:shadow-md transition-all text-left overflow-hidden"
                    >
                      <span className="absolute right-0 top-0 m-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 opacity-90 group-hover:opacity-100 transition">Page</span>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                          <Layout className="text-indigo-600" size={20} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-900 text-base truncate group-hover:text-indigo-700 transition-colors">{
                            slug
                              .split('-')
                              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(' ')
                          }</h3>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-indigo-600 font-medium group-hover:text-indigo-700 transition">View & Edit</span>
                        <ChevronRight className="text-indigo-300 group-hover:text-indigo-600 transition-colors flex-shrink-0" size={18} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Page Section Editor */}
            {activeSection === 'pages' && selectedPage && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedPage(null);
                      setEditingSection(null);
                    }}
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2"
                  >
                    ← Back to Pages
                  </button>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={savePage}
                      disabled={loading || !pageDoc}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Check size={16} />
                      {loading ? 'Saving...' : 'Save Page'}
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2 shadow-sm">
                      <Plus size={16} />
                      Add Section
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                      <Layout className="text-indigo-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 capitalize">{selectedPage} Page</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Manage all content sections using reusable components
                  </p>
                </div>

                <div className="space-y-4">
                  {pageTemplates[selectedPage]?.sections?.length > 0 ? (
                    pageTemplates[selectedPage].sections.map((section) => renderSectionEditor(section))
                  ) : (
                    <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
                      <p className="text-gray-500 text-sm">No sections found for this page</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Causes List */}
            {false && activeSection === 'causes' && !selectedItem && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {causes.map((cause) => (
                  <div
                    key={cause._id}
                    onClick={() => setSelectedItem(cause)}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
                  >
                    <h3 className="font-semibold text-gray-900">{cause.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{cause.subtitle}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                      {cause.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Cause Editor */}
            {false && activeSection === 'causes' && selectedItem && (
              <CauseEditor
                cause={selectedItem}
                onBack={() => setSelectedItem(null)}
                onSave={handleSaveCause}
                saving={saving}
              />
            )}

            {/* Settings */}
            {activeSection === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                      <Shield className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">User Roles & Permissions</h3>
                      <p className="text-sm text-gray-600 mt-0.5">Manage access levels for your team</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roles.map((role, idx) => {
                      const Icon = role.icon;
                      return (
                        <div key={idx} className={`p-5 rounded-xl border-2 ${role.color} hover:shadow-md transition-all cursor-pointer`}>
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <Icon size={22} />
                              <div>
                                <h4 className="font-bold text-sm">{role.name}</h4>
                                <p className="text-xs mt-1 opacity-80">{role.permissions}</p>
                              </div>
                            </div>
                            <button className="text-sm font-medium hover:underline">
                              Manage
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                        <Lock className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">Authentication</h3>
                    </div>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                        <div className="flex items-center gap-3">
                          <LogIn size={18} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-900">Login Settings</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                        <div className="flex items-center gap-3">
                          <UserPlus size={18} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-900">Signup Settings</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                        <div className="flex items-center gap-3">
                          <Shield size={18} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-900">Password Policy</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-base font-semibold text-gray-900 mb-6">General Settings</h3>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                        <input
                          type="text"
                          defaultValue="My Website"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                        <input
                          type="email"
                          defaultValue="admin@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm lg:col-span-2">
                    <h3 className="text-base font-semibold text-gray-900 mb-6">Security Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                          <p className="text-xs text-gray-500 mt-1">Add extra layer of security</p>
                        </div>
                        <label className="relative inline-block w-12 h-6">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-indigo-600 peer-checked:to-purple-600 peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-sm"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Login Attempts Limit</p>
                          <p className="text-xs text-gray-500 mt-1">Maximum failed attempts</p>
                        </div>
                        <input
                          type="number"
                          defaultValue="5"
                          className="w-16 px-3 py-2 border border-gray-300 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Story Editor */}
            {activeSection === 'stories' && selectedItem && (
              <StoryEditor
                story={selectedItem}
                onBack={() => setSelectedItem(null)}
                onCreate={handleCreateStory}
                onUpdate={handleUpdateStory}
                saving={saving}
              />
            )}

            {/* Global Settings */}
            {false && activeSection === 'global' && renderGlobalSettings()}

            {/* Settings */}
            {activeSection === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                      <Shield className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">User Roles & Permissions</h3>
                      <p className="text-sm text-gray-600 mt-0.5">Manage access levels for your team</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contacts */}
            {activeSection === 'contacts' && (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact._id || contact.email || contact.name} className="bg-white rounded-xl p-5 border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                        <p className="text-sm text-gray-500 mt-2">{contact.message}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        contact.status === 'new' ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-700'
                      }`}>
                        {contact.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminPanel;